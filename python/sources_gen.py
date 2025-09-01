def make_sources_section(links_text):
    """Generate a formatted Sources section with links."""
    links = [line.strip() for line in links_text.strip().splitlines() if line.strip()]

    html_parts = ['<h2 class="fw-bolder mb-4 mt-5" id="sources">Sources</h2>', '<ul>']
    for link in links:
        html_parts.append(f'    <li><a href="{link}" target="_blank">{link}</a></li>')
    html_parts.append('</ul>')

    return "\n".join(html_parts)


# ---------------- Example Usage ---------------- #
links_text = """
https://www.sustainabilitybynumbers.com/p/lithium-electric-vehicles
https://pubs.usgs.gov/periodicals/mcs2024/mcs2024-lithium.pdf
https://investingnews.com/daily/resource-investing/battery-metals-investing/lithium-investing/top-lithium-producers/
https://carboncredits.com/lithium-supply-outpaces-demand-for-now-whats-ahead/
https://www.bradley.com/insights/publications/2024/02/lithium-prices-in-free-fall-implications-for-clean-energy-transition-in-the-private-sector
https://www.barrons.com/articles/albemarle-stock-price-lithium-338d9f5e
https://www.ft.com/content/ab1f74c5-4b07-465f-aa1f-3bf89418ba87
https://www.energy.gov/eere/vehicles/articles/fact-915-february-27-2017-lithium-ion-battery-energy-density-has-increased-5-fold
https://www.nature.com/articles/s41586-019-1682-5
https://batteryuniversity.com/article/bu-702-how-to-store-batteries
https://batteryuniversity.com/article/bu-808-how-to-prolong-lithium-based-batteries
https://europe.wetlands.org/blog/world-water-day-the-water-impacts-of-lithium-extraction/
https://lithiumharvest.com/knowledge/lithium-extraction/environmental-impacts-of-lithium-mining-and-extraction/
https://climate.mit.edu/ask-mit/how-lithium-mined
https://www.carbonchain.com/blog/understand-your-cobalt-emissions
https://investors.metals.co/news-releases/news-release-details/new-benchmark-study-highlights-impacts-nickel-and-cobalt-mining
https://metals.co/wp-content/uploads/2023/11/Benchmark_Carbon-Sinks_Summary_2023.pdf

"""

result = make_sources_section(links_text)
print(result)
