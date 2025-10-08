import re
import unicodedata

def slugify(text):
    """Turn heading text into a clean ID slug"""
    text = unicodedata.normalize('NFKD', text).encode('ascii', 'ignore').decode('utf-8')
    text = re.sub(r'[^a-zA-Z0-9\s-]', '', text).lower()
    text = re.sub(r'\s+', '-', text.strip())
    return text

def convert_html_and_generate_toc(html):
    toc = []
    converted = html

    # --- Convert H1 ---
    converted = re.sub(
        r"<h1>(.*?)</h1>",
        lambda m: f'<h1 class="fw-bolder mb-1">{m.group(1).strip()}</h1>',
        converted,
        flags=re.DOTALL
    )

    # --- Convert H2 ---
    def repl_h2(m):
        text = m.group(1).strip()
        id_attr = slugify(text)
        toc.append({"type": "h2", "id": id_attr, "text": text, "children": []})
        return f'<h2 class="fw-bolder mb-4 mt-5" id="{id_attr}">{text}</h2>'
    converted = re.sub(r"<h2>(.*?)</h2>", repl_h2, converted, flags=re.DOTALL)

    # --- Convert H3 ---
    def repl_h3(m):
        text = m.group(1).strip()
        id_attr = slugify(text)
        if toc:
            toc[-1]["children"].append({"type": "h3", "id": id_attr, "text": text, "children": []})
        return f'<h3 id="{id_attr}" class="fw-bold mb-4 mt-5">{text}</h3>'
    converted = re.sub(r"<h3>(.*?)</h3>", repl_h3, converted, flags=re.DOTALL)

    # --- Convert plain text to paragraphs ---
    def repl_text(m):
        text = m.group(1).strip()
        if text:  # only wrap non-empty text
            return f'<p class="fs-5 mb-4">{text}</p>'
        return ""
    converted = re.sub(r"(?:^|\n)([^<>\n][^\n]*)", repl_text, converted)

    # --- Build TOC ---
    def build_toc(items):
        html_parts = ['<ul class="list-unstyled mb-0">']
        for item in items:
            html_parts.append(f'<li><a href="#{item["id"]}">{item["text"]}</a></li>')
            if item["children"]:
                html_parts.append("<li>" + build_toc(item["children"]) + "</li>")
        html_parts.append("</ul>")
        return "".join(html_parts)

    toc_html = build_toc(toc)
    return converted, toc_html


# -------------------------------
# Example usage
raw_html = """
<h1>Should Batteries Continue to be Used?</h1>
Batteries are used in numerous applications, but debates about their future have been sparked recently.
For example, mining battery materials such as lithium, cobalt, and nickel is extremely energy-intensive, requiring massive amounts of energy and causing environmental destruction. 
Lithium-ion batteries have a limited lifespan, often degrading after just a few years of use, resulting in frequent replacement cycles and accumulating electronic waste. The high cost of batteries also renders them impractical for affordable renewable energy storage, particularly when compared to alternatives such as supercapacitors or fuel cells. 
On the other hand, batteries are a very useful way to store energy to be used in devices such as phones and cars. Batteries allow our phones to be in our pockets rather than connected to a wall. 
More lithium keeps being found faster than we can extract it. It is abundant in the ocean as a salt, as well as in many places around the world in the Earth's crust.
This article explores the pros and cons of batteries and can give you an insight into what the future of energy storage will look like.
<h2>The Pros of Using Batteries</h2>
<h3>Resource Availability</h3>
When asking the question ‘should batteries still be used?', one key factor to consider is the availability of resources needed to produce them. As of 2025, the world has an estimated 115 million metric tons of lithium resources. Lithium is not scarce at all.
Battery production continues to expand, but raw material supply isn't the bottleneck. Global lithium production reached about 240,000 metric tons in 2024, while consumption was nearly the same, indicating a modest surplus and plenty of buffer for growth.
When you add in alternatives like nickel (over 3 million tons produced annually) and cobalt (around 170,000 tons), the material picture looks even more secure. Plenty of feedstock exists for mass battery manufacturing.
Material supply isn't the only thing improving: technology is driving costs down fast. 
Battery-grade lithium carbonate prices plummeted over 80% between late 2022 and 2024, falling from about $80,000 per ton to under $14,000 per ton. In fact, projections for 2025 anticipate average lithium prices around $16,300 per ton, still far below recent peaks.
Moreover, new lithium extraction technologies promise to shortcut traditional mining and further lower costs. For example, in Arkansas, companies are working on Direct Lithium Extraction (DLE) from oil field brines — a technique that's faster, cleaner, and more sustainable. These innovations will likely make batteries even cheaper over time.
<h3>Energy Storage Capability</h3>
When asking “are batteries worth it in 2025?”, one of the strongest arguments in favor of batteries is their ability to store a large amount of energy in a small, portable package.

Compared to supercapacitors or hydrogen fuel cells, batteries can store a lot more energy in a smaller package. Batteries have the highest energy density by far.

Lithium-ion batteries can achieve energy densities of 250-300 Wh/kg (watt-hours per kilogram), with newer designs aiming to push even higher. This is why electric cars can drive over 300 miles on a single charge and why your smartphone can run for days without needing a recharge.

Another important reason why batteries are still important for energy storage is that they can hold their charge for long periods. Lithium-ion batteries typically self-discharge at only 2-3% per month, meaning you don't lose much stored energy even when devices are idle. This reliability makes them perfect not only for daily use but also for backup power systems and off-grid living.

So, if you are deciding whether to continue using batteries, they certainly aren't obsolete. Their high energy density, compact size, and long charge retention make them the most practical solution for consumer electronics, electric vehicles, and renewable energy storage in 2025.
<h2>The Cons of Using Batteries</h2>
<h3>Battery Life</h3>
One of the biggest drawbacks of using batteries is that they lose capacity over time. No matter how carefully you use them, every charge cycle reduces their ability to hold energy. For example, a typical lithium-ion battery can be recharged around 500 to 1,000 times before its capacity drops below 80% of its original rating (batteryuniversity.com
). While this might sound like a lot, if you are charging your devices every day, your battery may already feel weak in just 2-3 years.

Batteries are also sensitive to how they are charged. Leaving a battery plugged in too long or allowing it to drain completely to 0% can cause permanent damage. This is why modern electronics require extra sensors and battery management systems, which add cost, complexity, and consume extra power.

For everyday users, this means that your smartphone, laptop, or even an off-grid solar battery system will eventually need replacement long before the rest of the device wears out. 

This limited lifespan is a significant factor to consider when deciding whether to continue relying on batteries.
<h3>Obtaining Battery Materials</h3>
One major downside to batteries—especially lithium-ion types—is the harmful environmental impact of mining battery materials.
High water usage is a critical concern. Conventional lithium extraction—especially from brine in water-stressed regions—can require up to 2 million liters of water per ton of lithium, depleting aquifers and disrupting ecosystems. In the Salar de Atacama, lithium mining consumes up to 65% of the region's freshwater, which severely affects local communities and wildlife.
Carbon and pollution footprints are significant, too. A 2021 study found that producing one ton of lithium via brine extraction emits approximately 11 tons of CO2 per ton of lithium extracted, while hard-rock methods release up to 37 tons of CO2 per ton. Cobalt mining adds to this. On average, each ton of refined cobalt carries a carbon footprint of around 24.4 tons of CO2 equivalent.
Ecosystem disruption from nickel and cobalt mining is another environmental cost. Removing forests and habitats not only destroys biodiversity but also eliminates carbon sinks. Mining these elements leads to the loss of vegetation that once absorbed CO2, amplifying the global warming impact.
<h2>Conclusion</h2>
So, should we continue to use batteries? That answer is up to you. Conduct research and share what you find. Linked below are the sources used to write this article, if you need a place to start. Check out possible alternatives such as fuel cells and supercapacitors. Batteries have both benefits and drawbacks. It is up to you to decide whether they stay or get replaced.
<h2>People also ask</h2>
"""

converted_html, toc_html = convert_html_and_generate_toc(raw_html)

print("=== Converted HTML ===")
print(converted_html)
print("\n=== TOC ===")
print(toc_html)
