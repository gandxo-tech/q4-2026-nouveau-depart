// Nouveau Départ - Moteur Comportemental & E-Commerce
const PRODUCTS = [
  {
    id: 'planner',
    name: 'Planner 2027 « Un jour à la fois »',
    cat: 'organisation',
    catLabel: 'Organisation & Clarté',
    price: 9900,
    was: 12900,
    img: 'img/planner.webp',
    rating: 4.9,
    reviews: 612,
    badge: 'Best-Seller',
    psychology: 'Friction cognitive minimale : la vue journalière supprime la paralysie du choix.',
    short: 'Vue annuelle, mensuelle et hebdomadaire, suivi d\'habitudes à cocher et bilans trimestriels. Couverture lin naturel lavable, 240 pages papier 120g anti-bavure.',
    details: [
      'Format compact A5 (facile à emporter en réunion ou au café)',
      '240 pages reliées à plat (ouverture à 180° pour écrire sans gêne)',
      'Pages dédiées au suivi de 6 micro-habitudes par mois',
      'Rubrique bilan trimestriel pour recalibrer vos objectifs sans culpabilité'
    ],
    routineTip: 'Laissez-le ouvert sur votre bureau le soir avec une seule priorité inscrite pour le lendemain matin.'
  },
  {
    id: 'journal',
    name: 'Journal de gratitude 90 jours',
    cat: 'bienetre',
    catLabel: 'Sérénité Mentale',
    price: 5900,
    was: 7500,
    img: 'img/journal.webp',
    rating: 4.9,
    reviews: 421,
    badge: 'Ancrage Émotionnel',
    psychology: 'Bascule le cerveau du biais de négativité vers la reconnaissance active en 180 secondes.',
    short: '3 minutes le matin pour poser son intention, 2 minutes le soir pour célébrer une victoire. Des questions ciblées pour apaiser l\'anxiété du coucher.',
    details: [
      '90 jours non datés : commencez le jour de votre choix sans gâcher de pages',
      'Questions courtes guidées (évite le syndrome de la page blanche)',
      'Citations stoïciennes et conseils de psychologie positive discrets',
      'Reliure souple au toucher velours'
    ],
    routineTip: 'Placez-le sur votre oreiller au réveil : vous le trouverez le soir avant d\'éteindre la lumière.'
  },
  {
    id: 'tapis-yoga',
    name: 'Tapis de yoga antidérapant 6 mm',
    cat: 'sport',
    catLabel: 'Corps & Mobilité',
    price: 14900,
    was: 18900,
    img: 'img/tapis-yoga.webp',
    rating: 4.8,
    reviews: 356,
    badge: 'Confort Articulaire',
    psychology: 'Déroulé au sol, il devient une zone frontière mentale consacrée au mouvement.',
    short: 'Éco-TPE hypoallergénique, amorti haute densité 6 mm respectueux des genoux et du dos. Double face antidérapante texturée pour le climat tropical.',
    details: [
      'Épaisseur optimale 6 mm : protection des articulations sur carrelage',
      'Matériau TPE haute résistance à la transpiration et sans odeur',
      'Sangle de transport et de suspension incluse',
      'Guide de 10 séances de mobilité matinale de 8 minutes offert'
    ],
    routineTip: 'Laissez-le visible dans votre salon : voir le tapis réduit de 60% l\'effort nécessaire pour débuter une séance.'
  },
  {
    id: 'gourde-motivation',
    name: 'Gourde de motivation horaire 1 L',
    cat: 'bienetre',
    catLabel: 'Vitalité & Hydratation',
    price: 6900,
    was: 8500,
    img: 'img/gourde-motivation.webp',
    rating: 4.7,
    reviews: 538,
    badge: 'Micro-Repères',
    psychology: 'Transforme un grand objectif intimidant (2L/jour) en 8 micro-étapes ludiques.',
    short: 'Repères horaires bienveillants pour boire régulièrement toute la journée. Sans BPA, paille ergonomique escamotable, anneau de transport étanche.',
    details: [
      'Capacité 1000 ml avec graduations horaires du matin à l\'après-midi',
      'Matériau Tritan résistant aux chocs et sans arrière-goût',
      'Bouchon étanche à clip sécurisé avec paille amovible facile à laver',
      'Compatible boissons fraîches et infusions d\'agrumes'
    ],
    routineTip: 'Remplissez-la dès que vous préparez votre café ou thé le matin. Gardez-la à portée de main.'
  },
  {
    id: 'bandes',
    name: 'Lot de 5 bandes élastiques progressives',
    cat: 'sport',
    catLabel: 'Renforcement & Tonus',
    price: 8900,
    was: 11500,
    img: 'img/bandes.webp',
    rating: 4.8,
    reviews: 289,
    badge: 'Zéro Contrainte',
    psychology: 'Supprime l\'excuse du déplacement : votre salle de renforcement tient dans la paume de la main.',
    short: '5 niveaux de résistance (2 kg à 18 kg) en latex 100% naturel. Idéal pour muscler le dos, les fessiers et les jambes chez soi en 15 minutes chrono.',
    details: [
      '5 résistances progressives : Vert clair (Léger) à Noir (Ultra Fort)',
      'Latex naturel indéformable et résistant aux torsions répétées',
      'Pochette de rangement respirante incluse',
      'Livret d\'exercices ciblés post-travail de bureau'
    ],
    routineTip: 'Accrochez la pochette à la poignée de porte : faites 2 séries de 15 mouvements avant le déjeuner.'
  },
  {
    id: 'kit-bienetre',
    name: 'Coffret Rituel Bien-être « Pause »',
    cat: 'bienetre',
    catLabel: 'Récupération Profonde',
    price: 27900,
    was: 34500,
    img: 'img/kit-bienetre.webp',
    rating: 4.9,
    reviews: 174,
    badge: 'Déconnexion',
    psychology: 'Conditionne le système nerveux parasympathique au lâcher-prise par les sens.',
    short: 'Bougie végétale parfumée apaisante, infusion locale citronnelle-gingembre bio, baume de massage au karité béninois pur et masque de sommeil occultant.',
    details: [
      'Bougie cire de soja naturelle 45h aux huiles essentielles relaxantes',
      'Infusion artisanale fraîchement récoltée (sachet hermétique 100g)',
      'Baume onctueux au beurre de karité bio brut du Nord-Bénin',
      'Masque de nuit en soie douce respirante pour un sommeil réparateur'
    ],
    routineTip: 'Prévoyez un rendez-vous fixe avec vous-même le dimanche soir pour clôturer la semaine en douceur.'
  },
  {
    id: 'kit-depart',
    name: 'Le Système Complet Nouveau Départ',
    cat: 'packs',
    catLabel: 'Pack Intégral',
    price: 29900,
    was: 37600,
    combo: ['planner', 'journal', 'tapis-yoga', 'gourde-motivation'],
    rating: 5.0,
    reviews: 132,
    badge: 'Système Clé en Main',
    psychology: 'L\'arsenal complet de design d\'environnement : corps, esprit, organisation et hydratation.',
    short: 'Le Planner 2027 relié lin + Le Journal de gratitude + Le Tapis de yoga 6 mm + La Gourde motivationnelle. L\'économie immédiate de 20% pour une refonte totale.',
    details: [
      'Comprend les 4 piliers essentiels de l\'installation d\'habitudes',
      'Accès prioritaire à notre canal de suivi WhatsApp 21 jours',
      'Livraison express 24h offerte à Cotonou, Calavi et Porto-Novo',
      'Code privilège -15% offert sur vos futurs réassorts'
    ],
    routineTip: 'Déballez chaque objet en lui attribuant un emplacement précis et non négociable dans votre maison.'
  }
];

// Diagnostic Data: Psychology & Intention Matrix
const INTENTIONS = {
  organisation: {
    label: 'Organisation & Procrastination',
    diag: 'Le piège classique : accumuler des to-do lists gigantesques sur smartphone qui créent de l\'anxiété plutôt que de l\'action.',
    microStep: 'Le principe de l\'objet unique : noter chaque soir une seule tâche décisive pour le lendemain sur papier tangible.',
    productRec: 'planner',
    reason: 'Le Planner A5 lin réduit la charge mentale et offre un ancrage visuel impossible à ignorer sur votre table.'
  },
  serenite: {
    label: 'Stress & Surcharge Mentale',
    diag: 'Le piège classique : ruminer les urgences de la journée jusqu\'à minuit en fixant un écran lumineux.',
    microStep: 'Le rituel de vidange cognitive : 3 minutes de gratitude écrite pour signaler au système nerveux que la journée est accomplie.',
    productRec: 'journal',
    reason: 'Le Journal 90 jours canalise l\'attention sur ce qui a fonctionné et induit un sommeil profond sans rumination.'
  },
  corps: {
    label: 'Sédentarité & Énergie Physique',
    diag: 'Le piège classique : viser 1h de sport intense en salle, puis abandonner dès la première semaine par fatigue.',
    microStep: 'La règle des 8 minutes : faire quelques mouvements doux dès le réveil, sans chercher la performance.',
    productRec: 'tapis-yoga',
    reason: 'Le Tapis 6 mm prêt au sol supprime la friction du déplacement et rend l\'échauffement naturel et immédiat.'
  },
  vitalite: {
    label: 'Hydratation & Fatigue Chronique',
    diag: 'Le piège classique : attendre d\'avoir soif (quand le corps est déjà à 2% de déshydratation et le cerveau ralenti).',
    microStep: 'La technique du repère visuel : caler ses gorgées sur les graduations horaires de la matinée.',
    productRec: 'gourde-motivation',
    reason: 'La Gourde 1L transforme un objectif flou en jeu d\'étapes claires tout au long de la journée de travail.'
  },
  renforcement: {
    label: 'Tonus Musculaire à Domicile',
    diag: 'Le piège classique : croire qu\'il faut des haltères lourds et un abonnement coûteux pour sculpter sa posture.',
    microStep: 'L\'habitude greffée : 3 séries de tirages élastiques directement après avoir refermé son ordinateur.',
    productRec: 'bandes',
    reason: 'Les bandes progressives s\'adaptent à votre niveau et soulagent immédiatement les tensions dorsales assises.'
  },
  global: {
    label: 'Nouveau Départ Intégral',
    diag: 'Le piège classique : vouloir changer tout d\'un coup sans outils adaptés et s\'épuiser au bout de 10 jours.',
    microStep: 'L\'effet combiné : structurer son espace physique avec 4 objets clés pour ancrer corps et esprit simultanément.',
    productRec: 'kit-depart',
    reason: 'Le Kit Intégral élimine toutes les frictions de démarrage et offre le meilleur rapport bénéfice/sérénité.'
  }
};

// 21-Day Protocol Steps
const PROTOCOL_DAYS = [
  'Écrire 1 priorité pour demain',
  '1 grand verre d\'eau au réveil',
  '5 min d\'étirements doux du dos',
  'Noter 3 gratitudes simples',
  '10 min de marche sans téléphone',
  'Vider la surface de son bureau',
  'Célébrer la fin de semaine 1 !',
  '20 squats au réveil',
  'Zéro écran après 22h30',
  'Boire 1L d\'eau avant 14h',
  'Écrire un mot d\'encouragement',
  '15 min de lecture inspirante',
  'Préparer son espace du matin',
  'Palier J14 : habitude enracinée',
  'Faire 3 séries d\'élastiques',
  '3 min de respiration calme',
  'Faire le tri d\'un tiroir encombré',
  'Bilan mi-parcours bienveillant',
  'Marcher 15 min après le dîner',
  'Planifier la semaine suivante',
  'Victoire 21J : vous avez réussi !'
];

// Utility Helpers
const fcfa = n => new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 0 }).format(Math.round(n)) + '\u00A0FCFA';
const pct = (was, now) => Math.round((1 - now / was) * 100);

// Global Cart State
const CART_KEY = 'nd_cart_2027';
let cart = [];
try { cart = JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch(e) { cart = []; }
let activePromo = null;
const PROMOS = { 'DEPART10': 10, 'DEFI21': 15 };

function saveCart() {
  try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch(e) {}
}

function addToCart(id, qty = 1) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const existing = cart.find(x => x.id === id);
  if (existing) existing.qty += qty;
  else cart.push({ id, qty });
  saveCart();
  renderCart();
  openCart();
  toast(`${p.name} ajouté à votre panier`);
}

function updateCartQty(idx, delta) {
  if (!cart[idx]) return;
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  saveCart();
  renderCart();
}

function removeCartItem(idx) {
  cart.splice(idx, 1);
  saveCart();
  renderCart();
}

function openCart() {
  document.getElementById('cart-drawer')?.classList.add('open');
  document.getElementById('cart-overlay')?.classList.add('open');
}

function closeCart() {
  document.getElementById('cart-drawer')?.classList.remove('open');
  document.getElementById('cart-overlay')?.classList.remove('open');
}

function openMobileNav() {
  document.getElementById('mobile-nav')?.classList.add('open');
  document.getElementById('nav-overlay')?.classList.add('open');
}

function closeMobileNav() {
  document.getElementById('mobile-nav')?.classList.remove('open');
  document.getElementById('nav-overlay')?.classList.remove('open');
}

function toast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
}

function getSubtotal() {
  return cart.reduce((sum, item) => {
    const p = PRODUCTS.find(x => x.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}

function renderCart() {
  const countEls = document.querySelectorAll('.cart-count');
  const totalCount = cart.reduce((sum, i) => sum + i.qty, 0);
  countEls.forEach(el => {
    el.textContent = totalCount;
    el.classList.remove('bump');
    void el.offsetWidth;
    el.classList.add('bump');
  });

  const bodyEl = document.getElementById('drawer-items');
  const footEl = document.getElementById('drawer-footer');
  if (!bodyEl || !footEl) return;

  if (cart.length === 0) {
    bodyEl.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--muted);">
        <p style="font-size: 1.1rem; font-weight: 700; color: var(--fg); margin-bottom: 0.5rem;">Votre panier est vide</p>
        <p style="font-size: 0.92rem; margin-bottom: 1.5rem;">Prenez le temps d'ancrer votre première bonne habitude.</p>
        <button class="btn btn-secondary btn-sm" onclick="location.hash='#catalogue'; window.NouveauDepart.closeCart();">Découvrir les outils</button>
      </div>
    `;
    footEl.style.display = 'none';
    return;
  }

  footEl.style.display = 'flex';
  const sub = getSubtotal();
  const freeThreshold = 20000;
  const isFreeShip = sub >= freeThreshold;
  const shipCost = isFreeShip ? 0 : 1500;
  const discountRate = activePromo ? PROMOS[activePromo] : 0;
  const discountVal = Math.round(sub * (discountRate / 100));
  const finalTotal = sub - discountVal + shipCost;

  const shipRatio = Math.min(100, Math.round((sub / freeThreshold) * 100));
  const shipText = isFreeShip 
    ? '✨ <strong>Livraison offerte</strong> débloquée pour Cotonou & Calavi !'
    : `Ajoutez encore <strong>${fcfa(freeThreshold - sub)}</strong> pour la livraison offerte.`;

  bodyEl.innerHTML = `
    <div class="free-ship-box">
      <div>${shipText}</div>
      <div class="free-ship-bar"><div class="free-ship-fill" style="width: ${shipRatio}%;"></div></div>
    </div>
    ${cart.map((item, idx) => {
      const p = PRODUCTS.find(x => x.id === item.id);
      if (!p) return '';
      return `
        <div class="cart-item">
          <img src="${p.img}" alt="${p.name}">
          <div>
            <div class="cart-item-title">${p.name}</div>
            <div style="font-size: 0.85rem; color: var(--muted); margin-top: 2px;">${fcfa(p.price)}</div>
            <div class="qty-stepper">
              <button onclick="window.NouveauDepart.updateQty(${idx}, -1)" aria-label="Moins">−</button>
              <span>${item.qty}</span>
              <button onclick="window.NouveauDepart.updateQty(${idx}, 1)" aria-label="Plus">+</button>
            </div>
          </div>
          <div style="text-align: right;">
            <strong class="tnum" style="font-size: 0.95rem;">${fcfa(p.price * item.qty)}</strong><br>
            <button onclick="window.NouveauDepart.removeItem(${idx})" style="color: var(--muted-light); font-size: 0.78rem; text-decoration: underline; margin-top: 0.3rem;">Retirer</button>
          </div>
        </div>
      `;
    }).join('')}
  `;

  footEl.innerHTML = `
    <div style="display: flex; gap: 0.5rem; margin-bottom: 0.5rem;">
      <input type="text" id="promo-input" placeholder="Code promo (ex: DEPART10)" value="${activePromo || ''}" style="flex: 1; min-width: 0; padding: 0.5rem 0.8rem; border-radius: var(--r-sm); border: 1px solid var(--line-strong); text-transform: uppercase; font-size: 0.86rem; font-weight: 700;">
      <button class="btn btn-secondary btn-sm" onclick="window.NouveauDepart.applyPromo()">Appliquer</button>
    </div>
    <div style="display: flex; justify-content: space-between; font-size: 0.92rem; color: var(--muted);">
      <span>Sous-total</span>
      <span class="tnum font-semibold" style="color: var(--fg);">${fcfa(sub)}</span>
    </div>
    ${discountVal > 0 ? `
      <div style="display: flex; justify-content: space-between; font-size: 0.92rem; color: var(--acc);">
        <span>Réduction code ${activePromo} (–${discountRate}%)</span>
        <span class="tnum font-semibold">−${fcfa(discountVal)}</span>
      </div>
    ` : ''}
    <div style="display: flex; justify-content: space-between; font-size: 0.92rem; color: var(--muted);">
      <span>Livraison (Cotonou, Calavi, Porto-Novo)</span>
      <span class="tnum font-semibold">${isFreeShip ? '<strong style="color: var(--acc);">Offerte</strong>' : fcfa(shipCost)}</span>
    </div>
    <div style="display: flex; justify-content: space-between; font-size: 1.2rem; font-weight: 800; border-top: 1px solid var(--line); padding-top: 0.6rem; color: var(--fg);">
      <span>Total</span>
      <span class="tnum">${fcfa(finalTotal)}</span>
    </div>
    <div style="display: flex; flex-direction: column; gap: 0.6rem; margin-top: 0.4rem;">
      <button class="btn btn-primary btn-block" onclick="window.NouveauDepart.openCheckoutModal()">Commander en ligne (MoMo / Livraison)</button>
      <button class="btn btn-wa btn-block" onclick="window.NouveauDepart.orderOnWhatsApp()">Commander directement sur WhatsApp</button>
    </div>
    <p style="text-align: center; font-size: 0.76rem; color: var(--muted-light); margin-top: 0.4rem;">
      Paiement sécurisé à la livraison ou via MTN MoMo, Moov Money, Wave, Celtiis.
    </p>
  `;
}

function applyPromo() {
  const input = document.getElementById('promo-input');
  if (!input) return;
  const val = input.value.trim().toUpperCase();
  if (PROMOS[val]) {
    activePromo = val;
    toast(`Code ${val} appliqué : –${PROMOS[val]}%`);
  } else {
    activePromo = null;
    toast('Code promotionnel invalide ou expiré');
  }
  renderCart();
}

function getOrderSummaryText() {
  const itemsText = cart.map(i => {
    const p = PRODUCTS.find(x => x.id === i.id);
    return `${i.qty}x ${p ? p.name : i.id} (${fcfa(p ? p.price * i.qty : 0)})`;
  }).join('\n- ');
  const sub = getSubtotal();
  const isFreeShip = sub >= 20000;
  const shipCost = isFreeShip ? 0 : 1500;
  const discountRate = activePromo ? PROMOS[activePromo] : 0;
  const discountVal = Math.round(sub * (discountRate / 100));
  const finalTotal = sub - discountVal + shipCost;

  return `Bonjour Nouveau Départ, je souhaite valider ma commande :\n- ${itemsText}\n\nSous-total : ${fcfa(sub)}${discountVal ? `\nCode promo ${activePromo} : -${fcfa(discountVal)}` : ''}\nLivraison : ${isFreeShip ? 'Offerte' : fcfa(shipCost)}\nTotal : ${fcfa(finalTotal)}\n\nMerci de m'indiquer la confirmation et le délai de livraison à Cotonou/Calavi.`;
}

function orderOnWhatsApp() {
  const text = encodeURIComponent(getOrderSummaryText());
  window.open(`https://wa.me/22900000000?text=${text}`, '_blank');
}

function openCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  if (!modal) return;
  const sub = getSubtotal();
  const isFreeShip = sub >= 20000;
  const shipCost = isFreeShip ? 0 : 1500;
  const discountRate = activePromo ? PROMOS[activePromo] : 0;
  const discountVal = Math.round(sub * (discountRate / 100));
  const finalTotal = sub - discountVal + shipCost;

  document.getElementById('modal-total').textContent = fcfa(finalTotal);
  modal.style.display = 'grid';
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  if (modal) modal.style.display = 'none';
}

// 21-Day Habit Challenge State
const PROTOCOL_KEY = 'nd_protocol_state_2027';
let protocolChecked = [];
try { protocolChecked = JSON.parse(localStorage.getItem(PROTOCOL_KEY)) || []; } catch(e) { protocolChecked = []; }

function toggleDay(idx) {
  if (protocolChecked.includes(idx)) {
    protocolChecked = protocolChecked.filter(x => x !== idx);
  } else {
    protocolChecked.push(idx);
  }
  try { localStorage.setItem(PROTOCOL_KEY, JSON.stringify(protocolChecked)); } catch(e) {}
  renderProtocol();
  if (protocolChecked.length === 21) {
    toast('🎉 Félicitations ! Votre code -15% DEFI21 est débloqué !');
  }
}

function renderProtocol() {
  const gridEl = document.getElementById('protocol-grid');
  const countEl = document.getElementById('protocol-count');
  const fillEl = document.getElementById('protocol-bar-fill');
  const feedbackEl = document.getElementById('protocol-feedback');
  if (!gridEl) return;

  const count = protocolChecked.length;
  if (countEl) countEl.textContent = `${count} / 21 jours`;
  if (fillEl) fillEl.style.width = `${Math.round((count / 21) * 100)}%`;

  if (feedbackEl) {
    if (count === 0) {
      feedbackEl.innerHTML = '👉 Cliquez sur le <strong>Jour 1</strong> dès aujourd\'hui pour enclencher votre boucle d\'habitude.';
    } else if (count < 7) {
      feedbackEl.innerHTML = `Bravo pour vos <strong>${count} micro-victoires</strong>. La première semaine bâtit la structure neuronale du geste.`;
    } else if (count < 14) {
      feedbackEl.innerHTML = `Semaine 1 validée ! La friction diminue, votre cerveau anticipe désormais la routine.`;
    } else if (count < 21) {
      feedbackEl.innerHTML = `Cap des 14 jours dépassé (${count}/21). L'automatisme prend le relais de la motivation.`;
    } else {
      feedbackEl.innerHTML = `🏆 <strong>Protocole 21 Jours accompli !</strong> Votre habitude est désormais ancrée. Utilisez le code <strong>DEFI21</strong> pour –15% sur toute la boutique.`;
    }
  }

  gridEl.innerHTML = PROTOCOL_DAYS.map((task, i) => {
    const isChecked = protocolChecked.includes(i);
    return `
      <button class="day-cell ${isChecked ? 'checked' : ''}" onclick="window.NouveauDepart.toggleDay(${i})" aria-label="Jour ${i + 1}: ${task}">
        <div class="day-num">
          <span>J${i + 1}</span>
          <span>${isChecked ? '✓' : ''}</span>
        </div>
        <div class="day-task">${task}</div>
      </button>
    `;
  }).join('');
}

// Intention Compass Diagnostic Engine
let currentIntention = 'organisation';

function selectIntention(key) {
  currentIntention = key;
  const item = INTENTIONS[key];
  if (!item) return;

  document.querySelectorAll('.intention-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.key === key);
  });

  const resEl = document.getElementById('diag-result-box');
  if (!resEl) return;

  const p = PRODUCTS.find(x => x.id === item.productRec);

  resEl.style.opacity = '0';
  setTimeout(() => {
    resEl.innerHTML = `
      <div>
        <span class="kicker">Analyse Comportementale</span>
        <h3 class="diag-title">${item.label}</h3>
        <div class="diag-point">
          <strong>Le piège :</strong>
          <span>${item.diag}</span>
        </div>
        <div class="diag-point">
          <strong>Le micro-pas :</strong>
          <span>${item.microStep}</span>
        </div>
        <div class="diag-point">
          <strong>L'outil adapté :</strong>
          <span>${item.reason}</span>
        </div>
        <div style="margin-top: 1.2rem; display: flex; gap: 0.8rem; align-items: center; flex-wrap: wrap;">
          <span style="font-size: 0.84rem; font-weight: 700; color: var(--acc); background: var(--acc-light); padding: 0.35rem 0.75rem; border-radius: 999px;">
            Code DEPART10 : –10% offert
          </span>
          <button class="btn btn-primary btn-sm" onclick="window.NouveauDepart.addToCart('${p.id}')">
            Adopter cet ancrage (${fcfa(p.price)})
          </button>
        </div>
      </div>
      <div class="diag-prod-card">
        <img src="${p.img}" alt="${p.name}">
        <div>
          <h4>${p.name}</h4>
          <div class="price">${fcfa(p.price)} ${p.was ? `<s style="font-size: 0.85rem; color: var(--muted-light);">${fcfa(p.was)}</s>` : ''}</div>
          <p style="font-size: 0.82rem; color: var(--muted); margin-top: 0.3rem;">${p.psychology}</p>
        </div>
      </div>
    `;
    resEl.style.opacity = '1';
  }, 180);
}

// Catalog Rendering & Filtering
let activeCategory = 'all';
let activeSort = 'recommended';

function renderCatalog() {
  const container = document.getElementById('catalog-grid');
  if (!container) return;

  let list = PRODUCTS.filter(p => {
    if (activeCategory === 'all') return true;
    return p.cat === activeCategory;
  });

  if (activeSort === 'price-asc') list.sort((a, b) => a.price - b.price);
  else if (activeSort === 'price-desc') list.sort((a, b) => b.price - a.price);
  else if (activeSort === 'reviews') list.sort((a, b) => b.reviews - a.reviews);

  container.innerHTML = list.map(p => {
    const disc = p.was ? pct(p.was, p.price) : 0;
    return `
      <article class="p-card">
        <div class="p-card-media">
          ${p.badge ? `<span class="p-card-badge">${p.badge}</span>` : ''}
          <img src="${p.img}" alt="${p.name}" loading="lazy">
        </div>
        <div class="p-card-body">
          <span class="p-card-cat">${p.catLabel}</span>
          <h3 class="p-card-title"><a href="#/produit/${p.id}">${p.name}</a></h3>
          <div class="p-card-rating">
            <span>★★★★★</span>
            <span>(${p.reviews} avis vérifiés)</span>
          </div>
          <p style="font-size: 0.84rem; color: var(--muted); line-height: 1.4; margin-top: 0.2rem;">${p.psychology}</p>
          <div class="p-card-price">
            <strong>${fcfa(p.price)}</strong>
            ${p.was ? `<s>${fcfa(p.was)}</s>` : ''}
          </div>
          <button class="btn btn-secondary btn-sm btn-add" onclick="window.NouveauDepart.addToCart('${p.id}')">
            Ajouter au panier
          </button>
        </div>
      </article>
    `;
  }).join('');
}

// Product Detail Page (PDP) View
function renderProductDetail(id) {
  const p = PRODUCTS.find(x => x.id === id);
  const pdpView = document.getElementById('pdp-view');
  const homeView = document.getElementById('home-view');
  if (!p || !pdpView || !homeView) return;

  homeView.style.display = 'none';
  pdpView.style.display = 'block';
  window.scrollTo(0, 0);

  const disc = p.was ? pct(p.was, p.price) : 0;
  pdpView.innerHTML = `
    <div class="wrap" style="padding: 2rem 0 5rem;">
      <nav style="font-size: 0.88rem; color: var(--muted); margin-bottom: 1.8rem;">
        <a href="#/" style="text-decoration: underline;">Accueil</a> / 
        <a href="#catalogue" style="text-decoration: underline;">Boutique</a> / 
        <span style="color: var(--fg);">${p.name}</span>
      </nav>

      <div class="pdp-grid">
        <div style="position: sticky; top: 88px; border-radius: var(--r-lg); overflow: hidden; background: var(--surface-alt); box-shadow: var(--shadow-md);">
          <img src="${p.img}" alt="${p.name}" style="width: 100%; aspect-ratio: 1; object-fit: cover;">
        </div>

        <div>
          <span class="kicker">${p.catLabel}</span>
          <h1 style="font-family: var(--font-display); font-size: clamp(1.8rem, 3.8vw, 2.6rem); line-height: 1.15; margin-bottom: 0.8rem; color: var(--fg);">
            ${p.name}
          </h1>

          <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 1.2rem; font-size: 0.9rem;">
            <span style="color: var(--gold);">★★★★★</span>
            <strong style="color: var(--fg);">${p.rating}/5</strong>
            <span style="color: var(--muted);">· ${p.reviews} retours d'expérience à Cotonou</span>
          </div>

          <div style="display: flex; align-items: baseline; gap: 0.8rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
            <strong class="tnum" style="font-size: 1.8rem; font-weight: 800; color: var(--fg);">${fcfa(p.price)}</strong>
            ${p.was ? `<s class="tnum" style="font-size: 1.1rem; color: var(--muted-light);">${fcfa(p.was)}</s> <span style="font-size: 0.84rem; font-weight: 700; color: var(--acc); background: var(--acc-light); padding: 0.2rem 0.5rem; border-radius: 4px;">–${disc}%</span>` : ''}
          </div>

          <div style="background: var(--surface-alt); border-left: 3px solid var(--acc); padding: 1rem 1.2rem; border-radius: 0 var(--r-sm) var(--r-sm) 0; margin-bottom: 1.6rem;">
            <strong style="display: block; font-size: 0.85rem; color: var(--acc); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.2rem;">L'Ancrage Psychologique</strong>
            <p style="font-size: 0.94rem; color: var(--fg); margin: 0;">${p.psychology}</p>
          </div>

          <p style="font-size: 1.05rem; line-height: 1.65; color: var(--muted); margin-bottom: 1.8rem;">
            ${p.short}
          </p>

          <div style="display: flex; gap: 0.85rem; flex-wrap: wrap; margin-bottom: 2rem;">
            <button class="btn btn-primary" style="flex: 1; min-width: 200px;" onclick="window.NouveauDepart.addToCart('${p.id}')">
              Ajouter au panier · ${fcfa(p.price)}
            </button>
            <button class="btn btn-wa" onclick="window.NouveauDepart.quickWaBuy('${p.id}')">
              Commander sur WhatsApp
            </button>
          </div>

          <div style="border-top: 1px solid var(--line); padding-top: 1.5rem; display: flex; flex-direction: column; gap: 0.8rem; font-size: 0.92rem; color: var(--muted);">
            <div>📍 <strong>Livraison 24h à 48h :</strong> Cotonou, Calavi, Porto-Novo (Offerte dès 20 000 FCFA).</div>
            <div>🛡️ <strong>Garantie Sérénité :</strong> Vérification de l'article devant le livreur avant paiement.</div>
            <div>🔄 <strong>Échange sans friction :</strong> 14 jours pour changer d'avis.</div>
          </div>

          <div style="margin-top: 2rem;">
            <h3 style="font-family: var(--font-display); font-size: 1.2rem; margin-bottom: 0.8rem;">Caractéristiques &amp; Conception</h3>
            <ul style="padding-left: 1.2rem; display: flex; flex-direction: column; gap: 0.4rem; color: var(--muted); font-size: 0.95rem;">
              ${(p.details || []).map(d => `<li>${d}</li>`).join('')}
            </ul>
          </div>

          <div style="margin-top: 2rem; background: #FFF; border: 1px solid var(--line); padding: 1.4rem; border-radius: var(--r-md);">
            <strong style="display: block; font-size: 0.92rem; color: var(--fg); margin-bottom: 0.4rem;">💡 Comment l'intégrer à votre routine :</strong>
            <p style="font-size: 0.92rem; color: var(--muted); margin: 0;">${p.routineTip}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function quickWaBuy(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const msg = encodeURIComponent(`Bonjour Nouveau Départ, je souhaite commander : ${p.name} (${fcfa(p.price)}). Pourriez-vous m'indiquer la livraison à Cotonou ?`);
  window.open(`https://wa.me/22900000000?text=${msg}`, '_blank');
}

// Router & View Switcher
function handleRouting() {
  const hash = window.location.hash || '#/';
  const homeView = document.getElementById('home-view');
  const pdpView = document.getElementById('pdp-view');

  closeMobileNav();

  if (hash.startsWith('#/produit/')) {
    const prodId = hash.replace('#/produit/', '');
    renderProductDetail(prodId);
  } else {
    if (pdpView) pdpView.style.display = 'none';
    if (homeView) homeView.style.display = 'block';

    if (hash === '#catalogue') {
      document.getElementById('catalogue')?.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#methode') {
      document.getElementById('methode')?.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#diagnostic') {
      document.getElementById('diagnostic')?.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#protocole') {
      document.getElementById('protocole')?.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#faq') {
      document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

// Setup Micro-Animations with Intersection Observer & Numbers Counter
function initObserver() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');

        // Animate counters if present inside revealed element
        entry.target.querySelectorAll('.counter').forEach(animateCounter);

        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => observer.observe(el));
}

function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  const decimals = parseInt(el.dataset.decimals || '0', 10);
  const suffix = el.dataset.suffix || '';
  const duration = 1400;
  const startTime = performance.now();

  function update(time) {
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = (target * easeOut).toFixed(decimals);
    
    // Format with thousands separator for integers
    const formatted = decimals === 0 ? new Intl.NumberFormat('fr-FR').format(current) : current;
    el.textContent = formatted + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      const finalFormatted = decimals === 0 ? new Intl.NumberFormat('fr-FR').format(target) : target.toFixed(decimals);
      el.textContent = finalFormatted + suffix;
    }
  }
  requestAnimationFrame(update);
}

// Typewriter handwriting animation
function initTypewriter() {
  const textEl = document.getElementById('typewriter-text');
  if (!textEl) return;

  const phrases = [
    'un environnement qui gagne',
    'des micro-habitudes sans effort',
    'la discipline sans épuisement',
    'vos résolutions 2027 durables'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 70;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      textEl.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 35;
    } else {
      textEl.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 70;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      typingSpeed = 2200; // Pause at end of phrase
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 500; // Pause before typing next
    }

    setTimeout(type, typingSpeed);
  }

  // Start after preloader disappears
  setTimeout(type, 1600);
}

// Preloader vanishing logic
function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('loaded');
    }, 1200);
  });

  // Fallback if load already fired or delayed
  setTimeout(() => {
    preloader.classList.add('loaded');
  }, 1600);
}

// Setup Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initTypewriter();
  renderCatalog();
  selectIntention('organisation');
  renderProtocol();
  renderCart();
  initObserver();
  handleRouting();

  window.addEventListener('hashchange', handleRouting);

  // Filter Buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.cat;
      renderCatalog();
    });
  });

  // Sort Selector
  document.getElementById('catalog-sort')?.addEventListener('change', e => {
    activeSort = e.target.value;
    renderCatalog();
  });

  // Intention Buttons
  document.querySelectorAll('.intention-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      selectIntention(btn.dataset.key);
    });
  });

  // Cart Drawer Listeners
  document.getElementById('cart-open-btn')?.addEventListener('click', openCart);
  document.getElementById('cart-close-btn')?.addEventListener('click', closeCart);
  document.getElementById('cart-overlay')?.addEventListener('click', closeCart);

  // Mobile Navigation Drawer Listeners
  document.getElementById('nav-toggle-btn')?.addEventListener('click', openMobileNav);
  document.getElementById('nav-close-btn')?.addEventListener('click', closeMobileNav);
  document.getElementById('nav-overlay')?.addEventListener('click', closeMobileNav);
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  // Modal Close
  document.getElementById('modal-close-btn')?.addEventListener('click', closeCheckoutModal);

  // Form Submit for Checkout Modal
  document.getElementById('checkout-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('cust-name').value;
    const phone = document.getElementById('cust-phone').value;
    const city = document.getElementById('cust-city').value;
    const payMethod = document.querySelector('input[name="pay_method"]:checked')?.value || 'Paiement à la livraison';

    const orderText = `Merci ${name} ! Votre commande a été enregistrée avec succès. Notre équipe vous contacte au ${phone} pour confirmer le créneau de livraison à ${city} (${payMethod}).`;
    alert(orderText);
    cart = [];
    saveCart();
    renderCart();
    closeCheckoutModal();
    closeCart();
  });
});

// Global API Exposure for inline event bindings
window.NouveauDepart = {
  addToCart,
  updateQty: updateCartQty,
  removeItem: removeCartItem,
  applyPromo,
  openCheckoutModal,
  closeCheckoutModal,
  orderOnWhatsApp,
  toggleDay,
  quickWaBuy,
  closeCart
};
