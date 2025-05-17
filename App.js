import React, { useState } from "react";

const menu = {
  "Kahvaltı": [
    {
      name: "Serpme Kahvaltı",
      weight: "850 g",
      price: "₺960",
      image: "https://bigchefs.com.tr/images/serpme-kahvalti.jpg"
    },
    {
      name: "Ev Kahvaltısı",
      weight: "550 g",
      price: "₺370",
      image: "https://bigchefs.com.tr/images/ev-kahvaltisi.jpg"
    }
  ],
  "Çorbalar": [
    {
      name: "Pazılı Mercimek Çorbası",
      weight: "300 ml",
      price: "₺155",
      image: "https://bigchefs.com.tr/images/mercimek.jpg"
    }
  ],
  "Ana Yemekler": [
    {
      name: "Mozarellalı Izgara Tavuk Göğsü",
      weight: "350 g",
      price: "₺395",
      image: "https://bigchefs.com.tr/images/mozarella-tavuk.jpg"
    },
    {
      name: "Ağır Ateşte Dana Tandır",
      weight: "400 g",
      price: "₺575",
      image: "https://bigchefs.com.tr/images/tandir.jpg"
    }
  ],
  "Tatlılar": [
    {
      name: "Çikolatalı Sufle",
      weight: "180 g",
      price: "₺215",
      image: "https://bigchefs.com.tr/images/sufle.jpg"
    },
    {
      name: "San Sebastian Cheesecake",
      weight: "200 g",
      price: "₺215",
      image: "https://bigchefs.com.tr/images/sebastian.jpg"
    }
  ],
  "İçecekler": [
    {
      name: "Filtre Kahve",
      weight: "250 ml",
      price: "₺125",
      image: "https://bigchefs.com.tr/images/filtre.jpg"
    },
    {
      name: "Demleme Çay",
      weight: "150 ml",
      price: "₺50",
      image: "https://bigchefs.com.tr/images/demleme-cay.jpg"
    }
  ]
};

export default function DigitalMenu() {
  const [selectedCategory, setSelectedCategory] = useState("Hepsi");
  const [searchTerm, setSearchTerm] = useState("");
  const categories = ["Hepsi", ...Object.keys(menu)];

  const filteredMenu = selectedCategory === "Hepsi"
    ? menu
    : { [selectedCategory]: menu[selectedCategory] };

  return (
    <div className="min-h-screen bg-[#0D1B2A] p-6 text-white font-sans">
      <h1 className="text-5xl font-extrabold text-center mb-6 tracking-wide">Lume Menü</h1>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-bold uppercase transition duration-200 ${
              selectedCategory === category
                ? "bg-yellow-400 text-[#0D1B2A]"
                : "bg-[#1B263B] text-white hover:bg-yellow-300 hover:text-[#0D1B2A]"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex justify-center mb-12">
        <input
          type="text"
          placeholder="Ürün ara..."
          className="w-full max-w-md px-4 py-2 rounded-full text-black focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        {Object.entries(filteredMenu).map(([category, items]) => {
          const filteredItems = items.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
          if (filteredItems.length === 0) return null;
          return (
            <div key={category}>
              <h2 className="text-3xl font-semibold mb-6 border-b-2 border-[#1B263B] pb-2 uppercase text-[#F5F5F5]">{category}</h2>
              <ul className="space-y-6">
                {filteredItems.map((item, index) => (
                  <li key={index} className="bg-[#1B263B] rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition duration-300">
                    <img src={item.image} alt={item.name} className="w-full h-36 object-cover" loading="lazy" />
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-lg text-white">{item.name}</span>
                        <span className="text-sm text-gray-300">{item.weight}</span>
                      </div>
                      <div className="text-right text-lg font-bold text-yellow-400">{item.price}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
