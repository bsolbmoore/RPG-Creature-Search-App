// script.js
document.addEventListener('DOMContentLoaded', () => {
  const inputEl    = document.getElementById('search-input');
  const btn        = document.getElementById('search-button');
  const nameEl     = document.getElementById('creature-name');
  const idEl       = document.getElementById('creature-id');
  const weightEl   = document.getElementById('weight');
  const heightEl   = document.getElementById('height');
  const typesEl    = document.getElementById('types');
  const hpEl       = document.getElementById('hp');
  const atkEl      = document.getElementById('attack');
  const defEl      = document.getElementById('defense');
  const sAtkEl     = document.getElementById('special-attack');
  const sDefEl     = document.getElementById('special-defense');
  const spdEl      = document.getElementById('speed');

  // Full mock data for creatures 1–20
  const creatures = [
    {
      id: 1, name: 'Pyrolynx', weight: 42, height: 32,
      types: ['fire'],
      stats: { hp:65, attack:80, defense:50, special_attack:90, special_defense:55, speed:100 }
    },
    {
      id: 2, name: 'Aquoroc', weight: 220, height: 53,
      types: ['water','rock'],
      stats: { hp:85, attack:90, defense:120, special_attack:60, special_defense:70, speed:40 }
    },
    {
      id:3,name:'Voltadon',weight:310,height:73,
      types:['electric','dragon'],
      stats:{ hp:92, attack:115, defense:75, special_attack:100, special_defense:80, speed:85 }
    },
    {
      id:4,name:'Floraspine',weight:38,height:33,
      types:['grass','poison'],
      stats:{ hp:78, attack:55, defense:80, special_attack:85, special_defense:90, speed:50 }
    },
    {
      id:5,name:'Cryostag',weight:160,height:67,
      types:['ice','fairy'],
      stats:{ hp:85, attack:75, defense:65, special_attack:110, special_defense:105, speed:95 }
    },
    {
      id:6,name:'Terradon',weight:390,height:87,
      types:['ground','flying'],
      stats:{ hp:98, attack:120, defense:85, special_attack:60, special_defense:80, speed:102 }
    },
    {
      id:7,name:'Emberapod',weight:19,height:20,
      types:['fire','bug'],
      stats:{ hp:55, attack:70, defense:50, special_attack:100, special_defense:65, speed:120 }
    },
    {
      id:8,name:'Lunaclaw',weight:92,height:58,
      types:['dark','psychic'],
      stats:{ hp:75, attack:85, defense:60, special_attack:95, special_defense:100, speed:88 }
    },
    {
      id:9,name:'Quillquake',weight:145,height:40,
      types:['ground','steel'],
      stats:{ hp:80, attack:105, defense:120, special_attack:50, special_defense:75, speed:40 }
    },
    {
      id:10,name:'Mystifin',weight:88,height:60,
      types:['water','ghost'],
      stats:{ hp:90, attack:60, defense:75, special_attack:115, special_defense:100, speed:80 }
    },
    {
      id:11,name:'Dracilume',weight:280,height:77,
      types:['fire','dragon'],
      stats:{ hp:95, attack:105, defense:85, special_attack:120, special_defense:80, speed:90 }
    },
    {
      id:12,name:'Thornaconda',weight:315,height:187,
      types:['grass','dark'],
      stats:{ hp:100, attack:115, defense:90, special_attack:50, special_defense:80, speed:60 }
    },
    {
      id:13,name:'Frostbyte',weight:88,height:50,
      types:['ice','electric'],
      stats:{ hp:75, attack:90, defense:70, special_attack:105, special_defense:85, speed:110 }
    },
    {
      id:14,name:'Graviboa',weight:560,height:150,
      types:['rock','psychic'],
      stats:{ hp:110, attack:85, defense:130, special_attack:65, special_defense:100, speed:45 }
    },
    {
      id:15,name:'Zephyreon',weight:60,height:37,
      types:['flying','fairy'],
      stats:{ hp:70, attack:65, defense:60, special_attack:110, special_defense:95, speed:125 }
    },
    {
      id:16,name:'Blazebore',weight:250,height:54,
      types:['fire','ground'],
      stats:{ hp:90, attack:120, defense:80, special_attack:75, special_defense:60, speed:85 }
    },
    {
      id:17,name:'Brontogale',weight:700,height:110,
      types:['flying','rock'],
      stats:{ hp:115, attack:95, defense:105, special_attack:75, special_defense:90, speed:55 }
    },
    {
      id:18,name:'Shadeelisk',weight:112,height:69,
      types:['dark','poison'],
      stats:{ hp:80, attack:85, defense:70, special_attack:110, special_defense:100, speed:95 }
    },
    {
      id:19,name:'Titanule',weight:490,height:77,
      types:['steel','water'],
      stats:{ hp:130, attack:95, defense:140, special_attack:60, special_defense:90, speed:30 }
    },
    {
      id:20,name:'Faegis',weight:55,height:30,
      types:['fairy','steel'],
      stats:{ hp:85, attack:50, defense:120, special_attack:100, special_defense:115, speed:55 }
    },
  ];

  function resetUI() {
    nameEl.textContent = '';
    idEl.textContent   = '';
    weightEl.textContent = '';
    heightEl.textContent = '';
    typesEl.innerHTML    = '';
    hpEl.textContent     = '';
    atkEl.textContent    = '';
    defEl.textContent    = '';
    sAtkEl.textContent   = '';
    sDefEl.textContent   = '';
    spdEl.textContent    = '';
  }

  btn.addEventListener('click', () => {
    const term = inputEl.value.trim();
    if (!term) return;

    const c = creatures.find(c =>
      c.id.toString() === term || c.name.toLowerCase() === term.toLowerCase()
    );
    if (!c) {
      alert('Creature not found');
      resetUI();
      return;
    }

    nameEl.textContent     = c.name.toUpperCase();
    idEl.textContent       = `#${c.id}`;
    weightEl.textContent   = `Weight: ${c.weight}`;
    heightEl.textContent   = `Height: ${c.height}`;
    hpEl.textContent       = c.stats.hp;
    atkEl.textContent      = c.stats.attack;
    defEl.textContent      = c.stats.defense;
    sAtkEl.textContent     = c.stats.special_attack;
    sDefEl.textContent     = c.stats.special_defense;
    spdEl.textContent      = c.stats.speed;

    typesEl.innerHTML = '';
    c.types.forEach(t => {
      const d = document.createElement('div');
      d.textContent = t.toUpperCase();
      typesEl.appendChild(d);
    });
  });
});
