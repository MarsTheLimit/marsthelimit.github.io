const periodicContainer = document.getElementById("table");
const lowerContainer = document.getElementById('lower-table');

function createElementBox(atomicMass, atomicNumber, symbol, name, eConfig, row, elementType, electroNegativity=0, synthetic="", radioactive="") {
    const box = document.createElement("td");
    box.className = "element-box " + elementType + " " + radioactive;
    box.style.border = "1px solid black";
    box.style.width = 100/18 + "%";

    const sideBySide = document.createElement("div");
    sideBySide.className = "row";

    const sideBySide2 = document.createElement("div");
    sideBySide2.className = "row";

    const number = document.createElement("div");
    number.className = "element-number col";
    number.textContent = atomicNumber;

    const avgMass = document.createElement("div");
    avgMass.className = "element-mass col";
    avgMass.textContent = atomicMass;

    sideBySide.appendChild(number);
    sideBySide.appendChild(avgMass);

    const sym = document.createElement("div");
    sym.className = "element-symbol "+synthetic;
    sym.textContent = symbol;

    const nm = document.createElement("div");
    nm.className = "element-name";
    nm.textContent = name;

    const electrons = document.createElement("div");
    electrons.className = "element-electron-config";
    electrons.textContent = eConfig;

    const en = document.createElement("div");
    en.className = "element-en";
    en.textContent = electroNegativity;

    // sideBySide2.appendChild(nm);
    // sideBySide2.appendChild(en);

    box.appendChild(sideBySide);
    box.appendChild(sym);
    // box.append(sideBySide2);
    box.appendChild(nm);
    box.appendChild(en);
    box.appendChild(electrons);
    row.appendChild(box);
}

function createEmptyElement(row) {
    const box = document.createElement("td");
    row.appendChild(box);
}

const row1 = document.createElement("tr")
periodicContainer.appendChild(row1)
const row2 = document.createElement("tr")
periodicContainer.appendChild(row2)
const row3 = document.createElement("tr")
periodicContainer.appendChild(row3)
const row4 = document.createElement("tr")
periodicContainer.appendChild(row4)
const row5 = document.createElement("tr")
periodicContainer.appendChild(row5)
const row6 = document.createElement("tr")
periodicContainer.appendChild(row6)
const row7 = document.createElement("tr")
periodicContainer.appendChild(row7)

const row8 = document.createElement("tr")
lowerContainer.appendChild(row8);
const row9 = document.createElement("tr")
lowerContainer.appendChild(row9);

createElementBox(1.008, 1, "H", "Hydrogen", "1s1", row1, "nonmetal", "2.20");

for (let i = 0; i < 16; i++) {
    createEmptyElement(row1);
}

createElementBox(4.003, 2, "He", "Helium", "1s2", row1, "noble-gas");
createElementBox(6.938, 3, "Li", "Lithium", "[He] 2s1", row2, "alkali-metal", .98);
createElementBox(9.012, 4, "Be", "Beryllium", "[He] 2s2", row2, "alkaline-earth-metal", 1.57);

for (let i = 0; i < 10; i++) {
    createEmptyElement(row2);
}

createElementBox(10.810, 5, "B", "Boron", "[He] 2s2 2p1", row2, "metalloid", 2.04);
createElementBox(12.011, 6, "C", "Carbon", "[He] 2s2 2p2", row2, "nonmetal", 2.55);
createElementBox(14.007, 7, "N", "Nitrogen", "[He] 2s2 2p3", row2, "nonmetal", 3.04);
createElementBox(15.999, 8, "O", "Oxygen", "[He] 2s2 2p4", row2, "nonmetal", 3.44);
createElementBox(18.998, 9, "F", "Fluorine", "[He] 2s2 2p5", row2, "halogen", 3.98);
createElementBox(20.180, 10, "Ne", "Neon", "[He] 2s2 2p6", row2, "noble-gas");
createElementBox(22.990, 11, "Na", "Sodium", "[Ne] 3s1", row3, "alkali-metal", .93);
createElementBox(24.305, 12, "Mg", "Magnesium", "[Ne] 3s2", row3, "alkaline-earth-metal", 1.31);

for (let i = 0; i < 10; i++) {
    createEmptyElement(row3);
}

createElementBox(26.982, 13, "Al", "Aluminum", "[Ne] 3s2 3p1", row3, "post-transition-metal", 1.61);
createElementBox(28.085, 14, "Si", "Silicon", "[Ne] 3s2 3p2", row3, "metalloid", "1.90");
createElementBox(30.974, 15, "P", "Phosphorus", "[Ne] 3s2 3p3", row3, "nonmetal", 2.19);
createElementBox(32.060, 16, "S", "Sulfur", "[Ne] 3s2 3p4", row3, "nonmetal", 2.58);
createElementBox(35.450, 17, "Cl", "Chlorine", "[Ne] 3s2 3p5", row3, "halogen", 3.16);
createElementBox(39.948, 18, "Ar", "Argon", "[Ne] 3s2 3p6", row3, "noble-gas");

createElementBox(39.098, 19, "K", "Potassium", "[Ar] 4s1", row4, "alkali-metal", .82);
createElementBox(40.078, 20, "Ca", "Calcium", "[Ar] 4s2", row4, "alkaline-earth-metal", "1.00");
createElementBox(44.956, 21, "Sc", "Scandium", "[Ar] 4s2 3d1", row4, "transition-metal", 1.36);
createElementBox(47.867, 22, "Ti", "Titanium", "[Ar] 4s2 3d2", row4, "transition-metal", 1.54);
createElementBox(50.942, 23, "V", "Vanadium", "[Ar] 4s2 3d3", row4, "transition-metal", 1.63);
createElementBox(51.996, 24, "Cr", "Chromium", "[Ar] 4s1 3d5", row4, "transition-metal", 1.66);
createElementBox(54.938, 25, "Mn", "Manganese", "[Ar] 4s2 3d5", row4, "transition-metal", 1.55);
createElementBox(55.845, 26, "Fe", "Iron", "[Ar] 4s2 3d6", row4, "transition-metal", 1.83);
createElementBox(58.933, 27, "Co", "Cobalt", "[Ar] 4s2 3d7", row4, "transition-metal", 1.88);
createElementBox(58.693, 28, "Ni", "Nickel", "[Ar] 4s2 3d8", row4, "transition-metal", 1.91);
createElementBox(63.546, 29, "Cu", "Copper", "[Ar] 4s1 3d10", row4, "transition-metal", "1.90");
createElementBox(65.380, 30, "Zn", "Zinc", "[Ar] 4s2 3d10", row4, "transition-metal", 1.65);
createElementBox(69.723, 31, "Ga", "Gallium", "[Ar] 4s2 3d10  4p1", row4, "post-transition-metal", 1.81);
createElementBox(72.630, 32, "Ge", "Germanium", "[Ar] 4s2 3d10 4p2", row4, "metalloid", 2.01);
createElementBox(74.922, 33, "As", "Arsenic", "[Ar] 4s2 3d10 4p3", row4, "metalloid", 2.18);
createElementBox(78.971, 34, "Se", "Selenium", "[Ar] 4s2 3d10 4p4", row4, "nonmetal", 2.55);
createElementBox(79.904, 35, "Br", "Bromine", "[Ar] 4s2 3d10 4p5", row4, "halogen", 2.96);
createElementBox(83.798, 36, "Kr", "Krypton", "[Ar] 4s2 3d10 4p6", row4, "noble-gas", "3.00");

createElementBox(85.468, 37, "Rb", "Rubidium", "[Kr] 5s1", row5, "alkali-metal", 0.82);
createElementBox(87.620, 38, "Sr", "Strontium", "[Kr] 5s2", row5, "alkaline-earth-metal", 0.95);
createElementBox(88.906, 39, "Y", "Yttrium", "[Kr] 4d1 5s2", row5, "transition-metal", 1.22);
createElementBox(91.224, 40, "Zr", "Zirconium", "[Kr] 5s2 4d2", row5, "transition-metal", 1.33);
createElementBox(92.906, 41, "Nb", "Niobium", "[Kr] 5s1 4d4", row5, "transition-metal", "1.60");
createElementBox(95.950, 42, "Mo", "Molybdenum", "[Kr] 5s1 4d5", row5, "transition-metal", 2.16);
createElementBox(98.000, 43, "Tc", "Technetium", "[Kr] 5s2 4d5", row5, "transition-metal", "1.90", "synthetic", "radioactive");
createElementBox(101.070, 44, "Ru", "Ruthenium", "[Kr] 5s1 4d7", row5, "transition-metal", "2.20");
createElementBox(102.905, 45, "Rh", "Rhodium", "[Kr] 5s1 4d8", row5, "transition-metal", 2.28);
createElementBox(106.420, 46, "Pd", "Palladium", "[Kr] 4d10", row5, "transition-metal", "2.20");
createElementBox(107.868, 47, "Ag", "Silver", "[Kr] 5s1 4d10 ", row5, "transition-metal", 1.93);
createElementBox(112.414, 48, "Cd", "Cadmium", "[Kr] 5s2 4d10", row5, "transition-metal", 1.69);
createElementBox(114.818, 49, "In", "Indium", "[Kr] 5s2 4d10 5p1", row5, "post-transition-metal", 1.78);
createElementBox(118.710, 50, "Sn", "Tin", "[Kr] 5s2 4d10 5p2", row5, "post-transition-metal", 1.96);
createElementBox(121.760, 51, "Sb", "Antimony", "[Kr] 5s2 4d10 5p3", row5, "metalloid", 2.05);
createElementBox(127.600, 52, "Te", "Tellurium", "[Kr] 5s2 4d10 5p4", row5, "metalloid", "2.10");
createElementBox(126.904, 53, "I", "Iodine", "[Kr] 5s2 4d10 5p5", row5, "halogen", 2.66);
createElementBox(131.293, 54, "Xe", "Xenon", "[Kr] 5s2 4d10 5p6", row5, "noble-gas", 2.60);

createElementBox(132.905, 55, "Cs", "Cesium", "[Xe] 6s1", row6, "alkali-metal", 0.79);
createElementBox(137.327, 56, "Ba", "Barium", "[Xe] 6s2", row6, "alkaline-earth-metal", 0.89);
createEmptyElement(row6);

createElementBox(138.905, 57, "La", "Lanthanum", "[Xe] 6s2 5d1", row8, "lanthanide", 1.10);
createElementBox(140.116, 58, "Ce", "Cerium", "[Xe] 6s2 4f1 5d1 ", row8, "lanthanide", 1.12);
createElementBox(140.908, 59, "Pr", "Praseodymium", "[Xe] 6s2 4f3", row8, "lanthanide", 1.13);
createElementBox(144.242, 60, "Nd", "Neodymium", "[Xe] 6s2 4f4", row8, "lanthanide", 1.14);
createElementBox(145.000, 61, "Pm", "Promethium", "[Xe] 6s2 4f5", row8, "lanthanide", 1.13, "", "radioactive");
createElementBox(150.360, 62, "Sm", "Samarium", "[Xe] 6s2 4f6", row8, "lanthanide", 1.17);
createElementBox(151.964, 63, "Eu", "Europium", "[Xe] 6s2 4f7", row8, "lanthanide", 1.20);
createElementBox(157.250, 64, "Gd", "Gadolinium", "[Xe] 6s2 4f7 5d1", row8, "lanthanide", 1.20);
createElementBox(158.925, 65, "Tb", "Terbium", "[Xe] 6s2 4f9", row8, "lanthanide", 1.10);
createElementBox(162.500, 66, "Dy", "Dysprosium", "[Xe] 6s2 4f10", row8, "lanthanide", 1.22);
createElementBox(164.930, 67, "Ho", "Holmium", "[Xe] 6s2 4f11", row8, "lanthanide", 1.23);
createElementBox(167.259, 68, "Er", "Erbium", "[Xe] 6s2 4f12", row8, "lanthanide", 1.24);
createElementBox(168.934, 69, "Tm", "Thulium", "[Xe] 6s2 4f13", row8, "lanthanide", 1.25);
createElementBox(173.045, 70, "Yb", "Ytterbium", "[Xe] 6s2 4f14", row8, "lanthanide", 1.10);
createElementBox(174.967, 71, "Lu", "Lutetium", "[Xe] 6s2 4f14 5d1", row8, "lanthanide", 1.27);

createElementBox(178.49, 72, "Hf", "Hafnium", "[Xe] 6s2 4f14 5d2", row6, "transition-metal", "1.30");
createElementBox(180.948, 73, "Ta", "Tantalum", "[Xe] 6s2 4f14 5d3", row6, "transition-metal", "1.50");
createElementBox(183.84, 74, "W", "Tungsten", "[Xe] 6s2 4f14 5d4", row6, "transition-metal", 2.36);
createElementBox(186.207, 75, "Re", "Rhenium", "[Xe] 6s2 4f14 5d5", row6, "transition-metal", "1.90");
createElementBox(190.23, 76, "Os", "Osmium", "[Xe] 6s2 4f14 5d6", row6, "transition-metal", "2.20");
createElementBox(192.217, 77, "Ir", "Iridium", "[Xe] 6s2 4f14 5d7", row6, "transition-metal", "2.20");
createElementBox(195.084, 78, "Pt", "Platinum", "[Xe] 6s1 4f14 5d9", row6, "transition-metal", 2.28);
createElementBox(196.967, 79, "Au", "Gold", "[Xe] 6s1 4f14 5d10", row6, "transition-metal", 2.54);
createElementBox(200.592, 80, "Hg", "Mercury", "[Xe] 6s2 4f14 5d10", row6, "transition-metal", "2.00");
createElementBox(204.383, 81, "Tl", "Thallium", "[Xe] 6s2 4f14 5d10 6p1", row6, "post-transition-metal", 1.62);
createElementBox(207.200, 82, "Pb", "Lead", "[Xe] 6s2 4f14 5d10 6p2", row6, "post-transition-metal", 2.33);
createElementBox(208.980, 83, "Bi", "Bismuth", "[Xe] 6s2 4f14 5d10 6p3", row6, "post-transition-metal", 2.02);
createElementBox(209.000, 84, "Po", "Polonium", "[Xe] 6s2 4f14 5d10 6p4", row6, "post-transition-metal", "2.00", "", "radioactive");
createElementBox(210.000, 85, "At", "Astatine", "[Xe] 6s2 4f14 5d10 6p5", row6, "halogen", "2.20", "", "radioactive");
createElementBox(222.000, 86, "Rn", "Radon", "[Xe] 6s2 4f14 5d10 6p6", row6, "noble-gas", "2.20", "", "radioactive");

createElementBox(223.000, 87, "Fr", "Francium", "[Rn] 7s1", row7, "alkali-metal", 0.70, "", "radioactive");
createElementBox(226.000, 88, "Ra", "Radium", "[Rn] 7s2", row7, "alkaline-earth-metal", 0.90, "", "radioactive");
createEmptyElement(row7);

// Actinides (row9)
createElementBox(227.000, 89, "Ac", "Actinium", "[Rn] 7s2 6d1", row9, "actinide", 1.10, "", "radioactive");
createElementBox(232.038, 90, "Th", "Thorium", "[Rn] 7s2 6d2", row9, "actinide", 1.30, "", "radioactive");
createElementBox(231.036, 91, "Pa", "Protactinium", "[Rn] 7s2 5f2 6d1", row9, "actinide", 1.50, "", "radioactive");
createElementBox(238.029, 92, "U",  "Uranium", "[Rn] 7s2 5f3 6d1", row9, "actinide", 1.38, "", "radioactive");
createElementBox(237.000, 93, "Np", "Neptunium", "[Rn] 7s2 5f4 6d1", row9, "actinide", 1.36, "synthetic", "radioactive");
createElementBox(244.000, 94, "Pu", "Plutonium", "[Rn] 7s2 5f6", row9, "actinide", 1.28, "synthetic", "radioactive");
createElementBox(243.000, 95, "Am", "Americium", "[Rn] 7s2 5f7", row9, "actinide", 1.13, "synthetic", "radioactive");
createElementBox(247.000, 96, "Cm", "Curium", "[Rn] 7s2 5f7 6d1", row9, "actinide", 1.28, "synthetic", "radioactive");
createElementBox(247.000, 97, "Bk", "Berkelium", "[Rn] 7s2 5f9", row9, "actinide", 1.30, "synthetic", "radioactive");
createElementBox(251.000, 98, "Cf", "Californium", "[Rn] 7s2 5f10", row9, "actinide", 1.30, "synthetic", "radioactive");
createElementBox(252.000, 99, "Es", "Einsteinium", "[Rn] 7s2 5f11", row9, "actinide", 1.30, "synthetic", "radioactive");
createElementBox(257.000, 100, "Fm", "Fermium", "[Rn] 7s2 5f12", row9, "actinide", 1.30, "synthetic", "radioactive");
createElementBox(258.000, 101, "Md", "Mendelevium", "[Rn] 7s2 5f13", row9, "actinide", 1.30, "synthetic", "radioactive");
createElementBox(259.000, 102, "No", "Nobelium", "[Rn] 7s2 5f14", row9, "actinide", 1.30, "synthetic", "radioactive");
createElementBox(266.000, 103, "Lr", "Lawrencium", "[Rn] 7s2 5f14 7p1", row9, "actinide", 1.30, "synthetic", "radioactive");

// Superheavy elements (row7)
createElementBox(267.000, 104, "Rf", "Rutherfordium", "[Rn] 7s2 5f14 6d2", row7, "transition-metal", 0, "synthetic", "radioactive");
createElementBox(270.000, 105, "Db", "Dubnium", "[Rn] 7s2 5f14 6d3", row7, "transition-metal", 0, "synthetic", "radioactive");
createElementBox(271.000, 106, "Sg", "Seaborgium", "[Rn] 7s2 5f14 6d4", row7, "transition-metal", 0, "synthetic", "radioactive");
createElementBox(270.000, 107, "Bh", "Bohrium", "[Rn] 7s2 5f14 6d5", row7, "transition-metal", 0, "synthetic", "radioactive");
createElementBox(277.000, 108, "Hs", "Hassium", "[Rn] 7s2 5f14 6d6", row7, "transition-metal", 0, "synthetic", "radioactive");
createElementBox(278.000, 109, "Mt", "Meitnerium", "[Rn] 7s2 5f14 6d7", row7, "transition-metal", 0, "synthetic", "radioactive");
createElementBox(281.000, 110, "Ds", "Darmstadtium", "[Rn] 7s2 5f14 6d8", row7, "transition-metal", 0, "synthetic", "radioactive");
createElementBox(282.000, 111, "Rg", "Roentgenium", "[Rn] 7s2 5f14 6d9", row7, "transition-metal", 0, "synthetic", "radioactive");
createElementBox(285.000, 112, "Cn", "Copernicium", "[Rn] 7s2 5f14 6d10", row7, "transition-metal", 0, "synthetic", "radioactive");
createElementBox(286.000, 113, "Nh", "Nihonium", "[Rn] 7s2 5f14 6d10 7p1", row7, "post-transition-metal", 0, "synthetic", "radioactive");
createElementBox(289.000, 114, "Fl", "Flerovium", "[Rn] 7s2 5f14 6d10 7p2", row7, "post-transition-metal", 0, "synthetic", "radioactive");
createElementBox(290.000, 115, "Mc", "Moscovium", "[Rn] 7s2 5f14 6d10 7p3", row7, "post-transition-metal", 0, "synthetic", "radioactive");
createElementBox(293.000, 116, "Lv", "Livermorium", "[Rn] 7s2 5f14 6d10 7p4", row7, "post-transition-metal", 0, "synthetic", "radioactive");
createElementBox(294.000, 117, "Ts", "Tennessine", "[Rn] 7s2 5f14 6d10 7p5", row7, "halogen", 0, "synthetic", "radioactive");
createElementBox(294.000, 118, "Og", "Oganesson", "[Rn] 7s2 5f14 6d10 7p6", row7, "noble-gas", 0, "synthetic", "radioactive");