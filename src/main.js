(() => {
  'use strict';

  document.documentElement.classList.add('js');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const desktopStory = window.matchMedia('(min-width: 761px) and (min-height: 670px)');
  const mobileMenu = window.matchMedia('(max-width: 760px)');
  const header = document.getElementById('site-header');
  const menuButton = document.getElementById('menu-toggle');
  const navigation = document.getElementById('main-nav');

  function setMenu(open, restoreFocus = false) {
    navigation.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    if (restoreFocus) menuButton.focus();
  }
  menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') setMenu(false, true);
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.site-header')) setMenu(false);
  });
  mobileMenu.addEventListener('change', () => setMenu(false));

  const villageNotice = { label: 'Notice Ekom-Nkam · source secondaire', url: 'https://fr.wikipedia.org/wiki/Ekom-Nkam' };
  const chutesNotice = { label: 'Notice Chutes d’Ekom · source secondaire', url: 'https://fr.wikipedia.org/wiki/Chutes_d%27Ekom' };
  const bareNotice = { label: 'Notice Baré-Bakem · source secondaire', url: 'https://fr.wikipedia.org/wiki/Bar%C3%A9-Bakem' };
  const mintoulFalls = { label: 'Fiche MINTOUL · Ekom-Nkam Falls', url: 'https://mintoul.gov.cm/en/site/ekom-nkam-falls/' };
  const ortoc = { label: 'ORTOC · Ékom Nkam', url: 'https://tourismeouestcameroun.com/sites-naturels-et-loisirs/ekom-nkam/' };
  const foodContext = 'Autour d’Ekom-Nkam, les sources institutionnelles évoquent la forêt riveraine et la pêche villageoise. Cela ne constitue pas une recette traditionnelle du village.';
  const records = {
    territoire: {
      title: 'COMMUNE DE BARÉ-BAKEM', kicker: 'CADRE COMMUNAL · S1, S2, S5',
      paragraphs: ['Ekom-Nkam est un village de la commune de Baré-Bakem (Moungo, Littoral). Les chutes d’Ekom / du Nkam y sont situées selon les notices et la fiche MINTOUL.', 'La commune est l’institution d’appui du village. Aucune « mairie d’Ekom-Nkam » n’a été établie par les sources consultées.', 'Ces mentions sont des repères documentaires, pas un mandat ni un soutien à ce site.'], links: [bareNotice, villageNotice, mintoulFalls]
    },
    histoire: {
      title: 'LES TRACES DU VILLAGE', kicker: 'HISTOIRE · S1, S2, S4, S5',
      paragraphs: ['La notice d’Ekom-Nkam cite le Dictionnaire des villages du Mungo (ORSTOM, 1971). L’original n’a pas été relu dans cette recherche : la référence est indirecte. Ce n’est pas une date de fondation.', 'La commune de Baré-Bakem est créée en 1993 et fonctionnelle à partir de 1996 — contexte communal, pas genèse du village.', 'Fondation, étymologie locale du nom et population actuelle restent à recueillir sur place. Le slogan éditorial n’est pas une citation d’archive.'], links: [villageNotice, bareNotice, mintoulFalls]
    },
    institutions: {
      title: 'CADRE INSTITUTIONNEL', kicker: 'COMMUNE & MINISTÈRE · S1, S2, S5, S7',
      paragraphs: ['Ekom-Nkam · Moungo · Littoral Cameroun : village de la commune de Baré-Bakem.', 'Le Ministère du Tourisme et des Loisirs (MINTOUL) publie une fiche sur les chutes. Ce lien documentaire n’implique aucun partenariat avec ce prototype.', 'Toute identité institutionnelle affichée ici reste un repère de localisation, pas un mandat.'], links: [bareNotice, mintoulFalls, villageNotice]
    },
    chute: {
      title: 'LES CHUTES D’EKOM-NKAM', kicker: 'SITE NATUREL · S3, S5, S6',
      paragraphs: ['Les sources situent dans le village une chute d’environ 80 mètres sur le fleuve Nkam, parfois appelée chutes d’Ekom ou chutes du Nkam.', 'La fiche MINTOUL distingue une chute « mâle » (Nkam) et une chute « femelle » (Oham), et décrit des aménagements d’accès. Débit, sécurité, tarifs et horaires : à vérifier sur place.', 'La photographie affichée est une vue Wikimedia Commons du site d’Ekom-Nkam.'], links: [chutesNotice, mintoulFalls, ortoc]
    },
    foret: {
      title: 'LA FORÊT AUTOUR DES CHUTES', kicker: 'PAYSAGE · S5, S6',
      paragraphs: ['La fiche MINTOUL évoque une forêt imposante autour des chutes, ainsi que des escaliers, garde-corps, boukarous et belvédère.', 'Ces descriptions institutionnelles ne remplacent pas un contrôle de terrain : état des sentiers, saison, sécurité et autorisations de prise de vue.', 'La photographie montre la flore de la vallée près des chutes (Wikimedia Commons).'], links: [mintoulFalls, ortoc]
    },
    greystoke: {
      title: 'MÉMOIRE DU TOURNAGE', kicker: 'ANECDOTE CULTURELLE · S3, S5, S6',
      paragraphs: ['Plusieurs sources associent les chutes au tournage de Greystoke / La légende de Tarzan (années 1980).', 'C’est une mémoire du lieu, distincte de l’histoire du peuplement. Elle ne doit pas être présentée comme une attraction certifiée sans confirmation locale.', 'La photographie montre une plateforme du site d’Ekom-Nkam (Wikimedia Commons).'], links: [chutesNotice, mintoulFalls, ortoc]
    },
    culture: {
      title: 'VOIX DU VILLAGE', kicker: 'CULTURE · S1, S5',
      paragraphs: ['La notice rapporte pour 1967 une population « essentiellement Baréko ». La fiche MINTOUL indique que les Mbô constitueraient le principal groupe et liste des pratiques (Mengoum, Ngono, Mbelè, Mian-koum) — pistes d’entretien, pas fiches publiables sans validation.', 'Ces mentions ne permettent pas d’imposer une identité unique ni de publier des rites sans accord des personnes concernées.', 'Langues et pratiques vivantes d’Ekom-Nkam : à documenter avec ses habitants.'], links: [villageNotice, mintoulFalls]
    },
    manioc: { title: 'LE MANIOC', kicker: 'PISTE VIVRIÈRE', paragraphs: [foodContext, 'Le manioc est une piste de conversation culinaire, pas une spécialité établie d’Ekom-Nkam.'], links: [mintoulFalls] },
    mais: { title: 'LE MAÏS', kicker: 'PISTE VIVRIÈRE', paragraphs: [foodContext, 'Aucune source consultée n’établit une recette de maïs propre au village.'], links: [mintoulFalls] },
    arachide: { title: 'L’ARACHIDE', kicker: 'PISTE VIVRIÈRE', paragraphs: [foodContext, 'La présence éventuelle de l’arachide dans la région ne prouve pas une préparation traditionnelle locale publiable.'], links: [mintoulFalls] },
    plantain: { title: 'LE PLANTAIN', kicker: 'PISTE VIVRIÈRE', paragraphs: [foodContext, 'Recettes et noms locaux restent à recueillir sur place avant toute fiche culinaire.'], links: [mintoulFalls] },
    hebergement: {
      title: 'SÉJOURNER À EKOM-NKAM', kicker: 'À VÉRIFIER SUR PLACE · S5, S10',
      paragraphs: ['Selon la fiche MINTOUL, il n’y a pas d’hôtel dans le village d’Ekom-Nkam. Une autre forme d’accueil peut exister : vérification locale obligatoire.', 'Des récits de voyage mentionnent parfois des chambres à l’entrée du site — piste, pas offre certifiée.', 'Aucun tarif, contact, classement ni disponibilité n’est annoncé sur ce site.'], links: [mintoulFalls]
    },
    nkongsamba: {
      title: 'NKONGSAMBA ET LE MOUNGO', kicker: 'PISTES RÉGIONALES · S5',
      paragraphs: ['La fiche MINTOUL renvoie vers des complexes du Moungo (Villa Luciole, Villa Kleber) et vers Nkongsamba pour l’hébergement proche.', 'Ce sont des pistes régionales, pas des recommandations ni des preuves d’ouverture actuelle. Contacter directement les établissements.', 'Distinguer le village d’Ekom-Nkam, l’entrée des chutes et les villes d’étape.'], links: [mintoulFalls]
    },
    demarche: {
      title: 'UN SITE, DES SOURCES', kicker: 'DÉMARCHE ÉDITORIALE',
      paragraphs: ['Ce prototype indépendant s’appuie sur le dossier docs/ pour Ekom-Nkam. Les identifiants S1 à S10 renvoient au registre sources.md.', 'Le site distingue le village, la commune de Baré-Bakem, le Moungo et le Littoral. Les chiffres de population historiques ne sont pas présentés comme actuels.', 'Aucun mandat communal, partenariat ministériel ou réservation n’est revendiqué.'], links: [villageNotice, mintoulFalls, bareNotice]
    },
    medias: {
      title: 'PHOTOGRAPHIES & CRÉDITS', kicker: 'WIKIMEDIA COMMONS · EKOM-NKAM',
      paragraphs: ['Les photographies du hero, des scènes et des galeries sont des vues des chutes d’Ekom-Nkam et de leurs abords (catégorie Commons Ekom Nkam Falls). Licences souvent CC BY-SA : attribution obligatoire.', 'Aucune photo libre d’hébergement, de mairie ou de plat du village n’a été trouvée pour Ekom-Nkam : ces thèmes restent textuels ou à documenter sur place.', 'Le fil SVG de navigation et les pictogrammes d’ingrédients sont des éléments graphiques du prototype.'], links: [{ label: 'Catégorie Commons · Ekom Nkam Falls', url: 'https://commons.wikimedia.org/wiki/Category:Ekom_Nkam_Falls' }, { label: 'Dossier local SOURCES.md', url: 'assets/a-valider/ekom-nkam/SOURCES.md' }, mintoulFalls]
    }
  };

  const sourceDialog = document.getElementById('source-dialog');
  const openers = new WeakMap();
  function openDialog(dialog, opener) {
    openers.set(dialog, opener);
    document.body.classList.add('dialog-open');
    dialog.showModal();
  }
  document.querySelectorAll('[data-source]').forEach(button => {
    button.addEventListener('click', () => {
      const record = records[button.dataset.source];
      if (!record) return;
      document.getElementById('source-title').textContent = record.title;
      document.getElementById('source-kicker').textContent = record.kicker;
      const body = document.getElementById('source-body');
      const links = document.getElementById('source-links');
      body.replaceChildren(...record.paragraphs.map(text => {
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        return paragraph;
      }));
      links.replaceChildren(...record.links.map(source => {
        const link = document.createElement('a');
        link.href = source.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = source.label + ' ↗';
        return link;
      }));
      openDialog(sourceDialog, button);
    });
  });
  document.querySelectorAll('[data-dialog]').forEach(button => {
    button.addEventListener('click', () => openDialog(document.getElementById(button.dataset.dialog), button));
  });
  document.querySelectorAll('dialog').forEach(dialog => {
    dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
      const rect = dialog.getBoundingClientRect();
      if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
    });
    dialog.addEventListener('close', () => {
      document.body.classList.remove('dialog-open');
      openers.get(dialog)?.focus({ preventScroll: true });
    });
  });
  const memo = 'PRÉPARER UNE VISITE À EKOM-NKAM\nVillage de la commune de Baré-Bakem — Moungo — Littoral Cameroun\n\n1. Confirmer Ekom-Nkam, l’accès aux chutes, un interlocuteur local et les conditions de visite autorisées.\n2. Vérifier transports, état de la piste (souvent citée depuis Melong II / N5), saison, sécurité et autorisations de prise de vue.\n3. Confirmer l’hébergement directement (village, entrée du site ou étape Moungo / Nkongsamba) : adresse, services, prix et disponibilité.\n\nCe site ne propose pas de réservation, de tarif d’entrée officiel ou de garantie sur les conditions de visite.';
  document.getElementById('copy-visit').addEventListener('click', async () => {
    const status = document.getElementById('copy-status');
    const fallback = document.getElementById('copy-fallback');
    try {
      await navigator.clipboard.writeText(memo);
      fallback.hidden = true;
      status.textContent = 'L’aide-mémoire a été copié.';
    } catch {
      fallback.hidden = false;
      fallback.value = memo;
      fallback.focus();
      fallback.select();
      status.textContent = 'Copie automatique indisponible. Vous pouvez copier le texte sélectionné ci-dessous.';
    }
  });

  const journey = document.getElementById('landscape-journey');
  const stage = document.getElementById('landscape-stage');
  const scenes = [...document.querySelectorAll('[data-scene]')];
  const sceneButtons = [...document.querySelectorAll('[data-scene-target]')];
  const sceneNav = document.querySelector('.scene-nav');
  const sceneHint = document.querySelector('.scene-scroll-hint');
  let enhanced = false;
  let activeScene = -1;
  let scrollFrame = 0;
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  function selectScene(index) {
    if (index === activeScene) return;
    const previousScene = scenes[activeScene];
    if (previousScene?.contains(document.activeElement)) sceneButtons[index].focus({ preventScroll: true });
    activeScene = index;
    scenes.forEach((scene, sceneIndex) => {
      const active = sceneIndex === index;
      scene.classList.toggle('is-active', active);
      scene.inert = enhanced && !active;
      if (enhanced && !active) scene.setAttribute('aria-hidden', 'true');
      else scene.removeAttribute('aria-hidden');
    });
    sceneButtons.forEach((button, buttonIndex) => {
      if (buttonIndex === index) button.setAttribute('aria-current', 'true');
      else button.removeAttribute('aria-current');
    });
  }

  function configureJourney() {
    enhanced = desktopStory.matches && !reducedMotion.matches;
    journey.classList.toggle('is-enhanced', enhanced);
    sceneNav.hidden = !enhanced;
    sceneHint.hidden = !enhanced;
    activeScene = -1;
    selectScene(0);
    requestScrollUpdate();
  }
  function visitScene(index) {
    if (!enhanced) {
      scenes[index].scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth', block: 'start' });
      return;
    }
    const top = window.scrollY + journey.getBoundingClientRect().top;
    const headerHeight = header.getBoundingClientRect().height;
    const travel = Math.max(1, journey.offsetHeight - stage.offsetHeight);
    window.scrollTo({ top: top - headerHeight + travel * (index + .15) / scenes.length, behavior: 'smooth' });
  }
  sceneButtons.forEach(button => button.addEventListener('click', () => visitScene(Number(button.dataset.sceneTarget))));
  desktopStory.addEventListener('change', configureJourney);
  reducedMotion.addEventListener('change', configureJourney);

  const hero = document.getElementById('accueil');
  const storyShell = document.querySelector('.story-shell');
  const storyPaths = [...document.querySelectorAll('[data-story-path]')];
  const storyGuide = document.querySelector('[data-story-guide]');
  const storySegments = [...document.querySelectorAll('[data-path-segment]')];
  const storyMarker = document.querySelector('[data-story-marker]');
  const sections = [...document.querySelectorAll('main > section[id]')];
  const navLinks = [...navigation.querySelectorAll('a')];
  let pathLength = 0;
  let pathProgress = 0;
  let pathFrame = 0;
  let lastPathScrollY = window.scrollY;
  let lastPathTime = performance.now();
  let scrollVelocity = 0;
  let scrollDirection = 1; // 1 = descente, -1 = retour (rétro)
  let rewindHoldUntil = 0;
  const revealElements = [...document.querySelectorAll('[data-reveal]')];
  const revealState = new WeakMap(); // 'hidden' | 'visible' | 'departing'

  // Progression par chapitres (sections) : chaque section = un segment du ruban
  function getPathTarget() {
    if (!sections.length) return 0;
    const focusY = header.getBoundingClientRect().height + window.innerHeight * 0.32;
    const count = sections.length;
    let reached = 0;

    for (let index = 0; index < count; index += 1) {
      const rect = sections[index].getBoundingClientRect();
      const height = Math.max(1, rect.height);
      const local = clamp((focusY - rect.top) / height, 0, 1);
      if (local >= 1) {
        reached += 1;
      } else {
        reached += local;
        break;
      }
    }

    return clamp(reached / count, 0, 1);
  }

  function prepareStoryPath() {
    if (!storyPaths.length || reducedMotion.matches) return;
    pathLength = (storyGuide || storyPaths[0]).getTotalLength();
    pathProgress = getPathTarget();

    storyPaths.forEach(path => {
      path.style.strokeDasharray = String(pathLength);
      path.style.strokeDashoffset = String(pathLength * (1 - pathProgress));
    });

    // Fenêtres de dash : un segment visible par chapitre
    if (storySegments.length && pathLength) {
      const segmentLength = pathLength / storySegments.length;
      storySegments.forEach((segment, index) => {
        segment.style.strokeDasharray = `${segmentLength} ${pathLength}`;
        segment.style.strokeDashoffset = String(-index * segmentLength);
      });
    }

    applyPathProgress();
  }

  function updateSegments(progress) {
    if (!storySegments.length) return;
    const activeIndex = clamp(
      Math.floor(progress * storySegments.length - 1e-9),
      0,
      storySegments.length - 1
    );
    storySegments.forEach((segment, index) => {
      segment.classList.toggle('is-past', index < activeIndex);
      segment.classList.toggle('is-active', index === activeIndex && progress < 0.995);
      if (progress >= 0.995) {
        segment.classList.add('is-past');
        segment.classList.remove('is-active');
      }
    });
  }

  function updateMarker(progress) {
    if (!storyMarker || !storyGuide || !pathLength) return;
    const point = storyGuide.getPointAtLength(pathLength * progress);
    storyMarker.style.left = `${point.x}%`;
    storyMarker.style.top = `${point.y}%`;
    storyMarker.classList.toggle('is-visible', progress > 0.01 && progress < 0.995);
  }

  function applyPathProgress() {
    if (!storyPaths.length || !pathLength) return;
    storyPaths.forEach(path => {
      path.style.strokeDashoffset = String(pathLength * (1 - pathProgress));
    });
    updateSegments(pathProgress);
    updateMarker(pathProgress);
  }

  function tickStoryPath(now) {
    if (!storyPaths.length || !pathLength || reducedMotion.matches) {
      pathFrame = 0;
      return;
    }

    const dt = Math.max(1, now - lastPathTime);
    const dy = window.scrollY - lastPathScrollY;
    const instantVelocity = dy / dt;
    scrollVelocity += (instantVelocity - scrollVelocity) * 0.55;
    lastPathScrollY = window.scrollY;
    lastPathTime = now;

    const target = getPathTarget();
    const speed = Math.abs(scrollVelocity);
    if (speed > 0.015) scrollDirection = scrollVelocity < 0 ? -1 : 1;
    if (scrollVelocity < -0.01) rewindHoldUntil = now + 450;
    const isRewinding = now < rewindHoldUntil || scrollVelocity < -0.01;
    document.documentElement.classList.toggle('is-rewinding', isRewinding);

    const scrollable = storyShell
      ? Math.max(1, storyShell.offsetHeight - window.innerHeight)
      : Math.max(1, document.documentElement.scrollHeight - window.innerHeight);

    // Rétro : recul immédiat + léger dépassement pour sentir le rembobinage
    pathProgress = clamp(pathProgress + dy / scrollable, 0, 1);
    if (isRewinding) {
      const rewindTarget = Math.max(0, target - Math.min(0.045, speed * 0.04));
      pathProgress += (rewindTarget - pathProgress) * clamp(0.85 + speed * 1.6, 0.85, 1);
    } else {
      pathProgress += (target - pathProgress) * clamp(0.55 + speed * 1.1, 0.55, 0.92);
    }
    if (speed < 0.02) pathProgress += (target - pathProgress) * 0.4;
    pathProgress = clamp(pathProgress, 0, 1);
    applyPathProgress();

    if (speed > 0.005 || Math.abs(target - pathProgress) > 0.0004 || now < rewindHoldUntil) {
      pathFrame = requestAnimationFrame(tickStoryPath);
    } else {
      pathProgress = target;
      applyPathProgress();
      pathFrame = 0;
      scrollVelocity = 0;
      document.documentElement.classList.remove('is-rewinding');
    }
  }

  function requestStoryPathTick() {
    if (reducedMotion.matches || !storyPaths.length) return;
    if (!pathFrame) {
      lastPathTime = performance.now();
      lastPathScrollY = window.scrollY;
      pathFrame = requestAnimationFrame(tickStoryPath);
    }
  }

  prepareStoryPath();

  let lastScrollY = window.scrollY;

  function isRevealInView(element) {
    const rect = element.getBoundingClientRect();
    const viewTop = header.getBoundingClientRect().height;
    const viewBottom = window.innerHeight * 0.92;
    return rect.top < viewBottom && rect.bottom > viewTop + 40;
  }

  function playReveal(element, mode) {
    if (reducedMotion.matches) return;
    const previous = revealState.get(element);
    if (previous === mode) return;

    if (mode === 'arriving') {
      element.classList.remove('departing', 'is-rewound');
      element.classList.add('arriving');
      revealState.set(element, 'arriving');
      element.addEventListener('animationend', () => {
        element.classList.remove('arriving');
        revealState.set(element, 'visible');
      }, { once: true });
      return;
    }

    if (mode === 'departing') {
      element.classList.remove('arriving');
      element.classList.add('departing');
      revealState.set(element, 'departing');
      element.addEventListener('animationend', () => {
        element.classList.remove('departing');
        element.classList.add('is-rewound');
        revealState.set(element, 'hidden');
      }, { once: true });
    }
  }

  function updateRevealMotion() {
    if (reducedMotion.matches || !revealElements.length) return;
    const viewBottom = window.innerHeight;

    revealElements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const inView = isRevealInView(element);
      const state = revealState.get(element) || 'hidden';
      const mid = (rect.top + rect.bottom) / 2;

      if (scrollDirection > 0) {
        // Descente : apparition dès qu’un élément entre dans le viewport
        if (inView && (state === 'hidden' || state === 'departing')) {
          playReveal(element, 'arriving');
        }
        return;
      }

      // Remontée : rewind VISIBLE tant que l’élément est encore à l’écran (moitié basse)
      if ((state === 'visible' || state === 'arriving') && mid > viewBottom * 0.42) {
        playReveal(element, 'departing');
      }
    });
  }

  function updateScroll() {
    const headerHeight = header.getBoundingClientRect().height;
    const currentY = window.scrollY;
    if (Math.abs(currentY - lastScrollY) > 1) {
      scrollDirection = currentY < lastScrollY ? -1 : 1;
      if (scrollDirection < 0) {
        rewindHoldUntil = performance.now() + 450;
        document.documentElement.classList.add('is-rewinding');
      }
    }
    lastScrollY = currentY;
    header.classList.toggle('is-scrolled', currentY > 35);
    let current = 'accueil';
    sections.forEach(section => {
      if (section.getBoundingClientRect().top <= headerHeight + 130) current = section.id;
    });
    navLinks.forEach(link => {
      if (link.hash === '#' + current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    if (!reducedMotion.matches && !mobileMenu.matches) {
      const progress = clamp(window.scrollY / Math.max(1, hero.offsetHeight), 0, 1);
      hero.style.setProperty('--hero-parallax', progress * 30 + 'px');
      hero.style.setProperty('--hero-scale', String(1.06 + progress * .07));
    } else {
      hero.style.removeProperty('--hero-parallax');
      hero.style.removeProperty('--hero-scale');
    }
    if (enhanced) {
      const travel = Math.max(1, journey.offsetHeight - stage.offsetHeight);
      const progress = clamp((headerHeight - journey.getBoundingClientRect().top) / travel, 0, 1);
      const chapterProgress = progress * scenes.length;
      selectScene(Math.min(scenes.length - 1, Math.floor(chapterProgress)));
      stage.style.setProperty('--scene-zoom', String(1.03 + (chapterProgress % 1) * .065));
    }
    updateRevealMotion();
    requestStoryPathTick();
    scrollFrame = 0;
  }
  function requestScrollUpdate() {
    if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScroll);
  }
  window.addEventListener('scroll', requestScrollUpdate, { passive: true });
  window.addEventListener('resize', () => {
    prepareStoryPath();
    requestScrollUpdate();
    requestStoryPathTick();
  }, { passive: true });
  configureJourney();
  requestStoryPathTick();

  document.querySelectorAll('.ingredient-grid [data-reveal]').forEach((element, index) => element.style.setProperty('--reveal-delay', index * 70 + 'ms'));
  document.querySelectorAll('.history-timeline [data-reveal]').forEach((element, index) => element.style.setProperty('--reveal-delay', index * 90 + 'ms'));
  document.querySelectorAll('.stay-options [data-reveal]').forEach((element, index) => element.style.setProperty('--reveal-delay', index * 90 + 'ms'));
  // Premier passage : éléments déjà visibles
  if (!reducedMotion.matches) {
    revealElements.forEach(element => {
      if (isRevealInView(element)) playReveal(element, 'arriving');
      else revealState.set(element, 'hidden');
    });
  }
})();
