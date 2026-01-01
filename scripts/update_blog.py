#!/usr/bin/env python3
"""
Costa Studio Blog Updater
Fetches latest influencer marketing articles from RSS feeds
and updates the blog section in index.html
"""

import feedparser
import re
from datetime import datetime
from html import escape

# RSS Feed sources organized by region
FEEDS = {
    'mx': [
        {'url': 'https://www.merca20.com/feed/', 'source': 'Merca2.0'},
    ],
    'us': [
        {'url': 'https://www.adweek.com/category/influencers-creators/feed/', 'source': 'Adweek'},
        {'url': 'https://blog.hubspot.com/marketing/rss.xml', 'source': 'HubSpot'},
    ],
    'global': [
        {'url': 'https://influencermarketinghub.com/feed/', 'source': 'Influencer Marketing Hub'},
        {'url': 'https://sproutsocial.com/insights/feed/', 'source': 'Sprout Social'},
        {'url': 'https://later.com/blog/feed/', 'source': 'Later'},
    ]
}

# Keywords to filter relevant articles
KEYWORDS = [
    'influencer', 'creator', 'content creator', 'social media marketing',
    'tiktok', 'instagram', 'youtube', 'brand partnership', 'ugc',
    'micro-influencer', 'nano-influencer', 'influencer marketing',
    'creator economy', 'brand ambassador', 'sponsored content',
    'marketing de influencers', 'creadores de contenido', 'redes sociales'
]

def is_relevant(title, summary=''):
    """Check if article is relevant to influencer marketing"""
    text = (title + ' ' + summary).lower()
    return any(keyword.lower() in text for keyword in KEYWORDS)

def fetch_articles(feed_info, limit=5):
    """Fetch articles from a single RSS feed"""
    articles = []
    try:
        feed = feedparser.parse(feed_info['url'])
        for entry in feed.entries[:limit * 2]:  # Fetch more to filter
            title = entry.get('title', '')
            summary = entry.get('summary', entry.get('description', ''))
            link = entry.get('link', '')

            if is_relevant(title, summary) and link:
                articles.append({
                    'title': escape(title[:80] + '...' if len(title) > 80 else title),
                    'url': link,
                    'source': feed_info['source']
                })
                if len(articles) >= limit:
                    break
    except Exception as e:
        print(f"Error fetching {feed_info['source']}: {e}")
    return articles

def get_articles_by_region():
    """Get articles organized by region"""
    results = {'mx': [], 'us': [], 'global': []}

    for region, feeds in FEEDS.items():
        for feed in feeds:
            articles = fetch_articles(feed, limit=3)
            results[region].extend(articles)

    # Ensure we have the right count per region
    results['mx'] = results['mx'][:3]
    results['us'] = results['us'][:3]
    results['global'] = results['global'][:4]

    return results

def generate_article_html(article, region, delay):
    """Generate HTML for a single article card"""
    region_class = f"blog__card--{region}"
    region_label = {'mx': 'Mexico', 'us': 'USA', 'global': 'Global'}[region]

    return f'''          <article class="blog__card {region_class}" data-animate="fade-up" data-delay="{delay}">
            <span class="blog__region">{region_label}</span>
            <a href="{article['url']}" target="_blank" rel="noopener" class="blog__link">
              <h3 class="blog__card-title">{article['title']}</h3>
              <p class="blog__source">{article['source']}</p>
            </a>
          </article>'''

def generate_blog_grid(articles_by_region):
    """Generate the complete blog grid HTML"""
    html_parts = []
    delay = 0.1

    # Mexico articles
    html_parts.append('          <!-- Mexico -->')
    for article in articles_by_region['mx']:
        html_parts.append(generate_article_html(article, 'mx', delay))
        delay += 0.05

    # USA articles
    html_parts.append('\n          <!-- USA -->')
    for article in articles_by_region['us']:
        html_parts.append(generate_article_html(article, 'us', delay))
        delay += 0.05

    # Global articles
    html_parts.append('\n          <!-- Global -->')
    for article in articles_by_region['global']:
        html_parts.append(generate_article_html(article, 'global', delay))
        delay += 0.05

    return '\n'.join(html_parts)

def update_index_html(new_grid_content):
    """Update the blog grid in index.html"""
    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()

    # Pattern to match the blog grid content
    pattern = r'(<div class="blog__grid" id="blog-articles">)\s*(.*?)\s*(</div>\s*</div>\s*</section>\s*<!-- =+\s*CTA FINAL)'

    replacement = f'\\1\n{new_grid_content}\n        \\3'

    new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(new_content)

def main():
    print(f"Starting blog update at {datetime.now()}")

    # Fetch articles
    print("Fetching articles from RSS feeds...")
    articles = get_articles_by_region()

    total = sum(len(v) for v in articles.values())
    print(f"Found {total} relevant articles")

    if total < 5:
        print("Not enough articles found, keeping current content")
        return

    # Generate new HTML
    print("Generating new blog grid...")
    new_grid = generate_blog_grid(articles)

    # Update index.html
    print("Updating index.html...")
    update_index_html(new_grid)

    print("Blog update complete!")

if __name__ == '__main__':
    main()
