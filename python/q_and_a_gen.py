import json
import re

def parse_faq(text):
    """Parse raw Q/A text into list of dicts"""
    faq_list = []
    qa_pairs = re.split(r"\s*Q:\s*", text.strip())
    for pair in qa_pairs:
        if not pair.strip():
            continue
        try:
            question, answer = pair.split("A:", 1)
        except ValueError:
            continue
        faq_list.append({
            "question": question.strip(),
            "answer": answer.strip()
        })
    return faq_list

def make_json_ld(faq_list):
    """Generate FAQPage JSON-LD from parsed Q/A"""
    data = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": []
    }
    for faq in faq_list:
        data["mainEntity"].append({
            "@type": "Question",
            "name": faq["question"],
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq["answer"]
            }
        })
    return json.dumps(data, indent=4)

def make_html(faq_list):
    """Generate Bootstrap FAQ cards from parsed Q/A"""
    html_parts = []
    for i, faq in enumerate(faq_list, start=1):
        html_parts.append(f"""
<div class="card mb-4">
    <div id="faq{i}" class="card-header">{faq['question']}</div>
    <div class="card-body">{faq['answer']}</div>
</div>
""")
    return "\n".join(html_parts)

def make_toc(faq_list):
    """Generate a list of FAQ links (Table of Contents)"""
    toc_parts = ['<li><ul>']
    for i, faq in enumerate(faq_list, start=1):
        toc_parts.append(f'    <li><a href="#faq{i}">{faq["question"]}</a></li>')
    toc_parts.append('</ul></li>')
    return "\n".join(toc_parts)

# ---------------- Example Usage ---------------- #
raw_text = """
Q: Why are lithium-ion batteries so popular?
A: Lithium-ion batteries are widely used because they offer high energy density, long cycle life, and relatively low self-discharge rates. This makes them perfect for portable electronics and electric vehicles. However, they are also more expensive and require careful charging to prevent degradation.

Q: How long do batteries last?
A: The lifespan of a battery depends on its chemistry and usage. Alkaline batteries may last months in low-power devices (although they can't be recharged), while lithium-ion batteries typically last 500-1000 charge cycles before losing a good amount of energy capacity. Proper charging and storage can extend a battery's useful life.

Q: Are batteries bad for the environment?
A: Mining materials like lithium, cobalt, and nickel for batteries is energy-intensive and causes pollutants to enter the environment. It can damage ecosystems, use vast amounts of water, and release greenhouse gases. Additionally, discarded batteries can leak toxic materials into soil and water. Recycling and non-toxic alternatives like supercapacitors or hydrogen fuel cells are being explored to reduce these impacts.

Q: Are there alternatives to batteries?
A: Yes. Researchers are developing supercapacitors, solid-state batteries, hydrogen fuel cells, and advanced recycling systems as alternatives or supplements to current battery technology. These solutions may offer longer lifespans, faster charging, and reduced environmental costs compared to traditional batteries.

"""

faq_items = parse_faq(raw_text)
print("=== JSON-LD ===")
print(make_json_ld(faq_items))
print("\n=== TOC (FAQ Links) ===")
print(make_toc(faq_items))
print("\n=== HTML ===")
print(make_html(faq_items))
