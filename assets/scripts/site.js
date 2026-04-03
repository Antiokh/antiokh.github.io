(function () {
            const number = "381629795315";
            const raw = "Hello NeedleBit, I'd like to discuss an internal system, MVP, SaaS, or automation project. Please share the next available slot.";
            const link = document.getElementById("whatsapp-link");
            const cursorGlow = document.querySelector(".cursor-glow");
            const summaryNode = document.querySelector("[data-system-summary]");
            const navToggle = document.querySelector(".nav-toggle");
            const navMenu = document.querySelector(".nav-menu");
            const summaryParts = {
                frontend: {
                    WeWeb: "fast-to-ship web product delivery",
                    FlutterFlow: "mobile-first delivery with a path to native apps"
                },
                backend: {
                    Supabase: "strong ownership over data, auth, and storage",
                    Xano: "structured backend logic built for operational flows"
                },
                automation: {
                    n8n: "flexible automation for integrations, AI steps, and ops work",
                    Activepieces: "leaner automation with lower operational overhead"
                }
            };

            function renderSystemSummary() {
                if (!summaryNode) {
                    return;
                }

                const frontend = document.querySelector('[data-current="frontend"]')?.textContent?.trim() || "WeWeb";
                const backend = document.querySelector('[data-current="backend"]')?.textContent?.trim() || "Supabase";
                const automation = document.querySelector('[data-current="automation"]')?.textContent?.trim() || "n8n";

                const frontendText = summaryParts.frontend[frontend] || "fast product delivery";
                const backendText = summaryParts.backend[backend] || "reliable backend control";
                const automationText = summaryParts.automation[automation] || "dependable automation";
                const hostingText = backend === "Supabase"
                    ? "with a self-hostable foundation if you want infrastructure control"
                    : "with a managed backend tradeoff instead of a fully self-hostable core";

                summaryNode.textContent =
                    frontendText.charAt(0).toUpperCase() +
                    frontendText.slice(1) +
                    ", " +
                    backendText +
                    ", and " +
                    automationText +
                    ", " +
                    hostingText +
                    ".";
            }

            if (link) {
                link.href = "https://wa.me/" + number + "?text=" + encodeURIComponent(raw);
                link.target = "_blank";
                link.rel = "noopener noreferrer";
            }

            if (navToggle && navMenu) {
                navToggle.addEventListener("click", () => {
                    const isOpen = navMenu.classList.toggle("is-open");
                    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
                    navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
                });

                navMenu.querySelectorAll("a").forEach((node) => {
                    node.addEventListener("click", () => {
                        navMenu.classList.remove("is-open");
                        navToggle.setAttribute("aria-expanded", "false");
                        navToggle.setAttribute("aria-label", "Open navigation");
                    });
                });
            }

            if (cursorGlow && window.matchMedia("(pointer: fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                let rafId = null;
                const point = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

                function paintGlow() {
                    cursorGlow.style.transform = "translate3d(" + point.x + "px, " + point.y + "px, 0) translate(-50%, -50%)";
                    rafId = null;
                }

                window.addEventListener("pointermove", (event) => {
                    point.x = event.clientX;
                    point.y = event.clientY;

                    if (!document.body.classList.contains("has-cursor-glow")) {
                        document.body.classList.add("has-cursor-glow");
                    }

                    if (!rafId) {
                        rafId = window.requestAnimationFrame(paintGlow);
                    }
                }, { passive: true });

                window.addEventListener("pointerleave", () => {
                    document.body.classList.remove("has-cursor-glow");
                });
            }

            const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            const disableScrollReveal = reduceMotion || window.matchMedia("(max-width: 900px)").matches || window.matchMedia("(pointer: coarse)").matches;

            if ("IntersectionObserver" in window && !disableScrollReveal) {
                document.body.classList.add("reveal-ready");

                const revealGroups = [
                    { selector: ".hero-copy", type: "heading", step: 0 },
                    { selector: ".hero-visual", type: "hero-visual", step: 140 },
                    { selector: ".section-heading", type: "heading", step: 0 },
                    { selector: ".result-card", type: "card", step: 70 },
                    { selector: ".comparison-card", type: "card", step: 90 },
                    { selector: ".service-card", type: "card", step: 75 },
                    { selector: ".insight-card", type: "card", step: 75 },
                    { selector: ".value-card", type: "card", step: 75 },
                    { selector: ".case-lane", type: "lane", step: 120 },
                    { selector: ".process-step", type: "card", step: 85 },
                    { selector: ".testimonial-lane", type: "lane", step: 120 },
                    { selector: ".founder-copy", type: "heading", step: 0 },
                    { selector: ".founder-card", type: "card", step: 120 },
                    { selector: ".faq-item", type: "card", step: 55 },
                    { selector: ".booking-embed", type: "card", step: 120 }
                ];

                revealGroups.forEach((group) => {
                    document.querySelectorAll(group.selector).forEach((node, index) => {
                        node.dataset.reveal = group.type;
                        node.style.setProperty("--reveal-delay", Math.min(index * group.step, 320) + "ms");
                    });
                });

                const revealObserver = new IntersectionObserver((entries, observer) => {
                    entries.forEach((entry) => {
                        if (!entry.isIntersecting) {
                            return;
                        }

                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    });
                }, {
                    threshold: 0.18,
                    rootMargin: "0px 0px -10% 0px"
                });

                document.querySelectorAll("[data-reveal]").forEach((node) => {
                    revealObserver.observe(node);
                });
            }

            function buildMarqueeTrack(track) {
                if (!track) {
                    return;
                }

                if (!track._sourceTemplates) {
                    const sourceCards = Array.from(track.children).filter((node) => node.getAttribute("aria-hidden") !== "true");

                    if (!sourceCards.length) {
                        return;
                    }

                    track._sourceTemplates = sourceCards.map((card) => card.cloneNode(true));
                }

                const sourceCards = track._sourceTemplates.map((card) => card.cloneNode(true));
                const isMobileCarousel = window.matchMedia("(max-width: 640px)").matches;

                if (!sourceCards.length) {
                    return;
                }

                const gap = parseFloat(window.getComputedStyle(track).gap || "0");
                const lane = track.closest(".case-lane, .testimonial-lane");
                const fragment = document.createDocumentFragment();

                if (isMobileCarousel) {
                    const total = sourceCards.length;
                    const currentIndex = Number.parseInt(track.dataset.mobileIndex || "0", 10);
                    const normalizedIndex = Number.isFinite(currentIndex)
                        ? ((currentIndex % total) + total) % total
                        : 0;
                    const mobileBuffer = 2;
                    const renderIndexes = Array.from({ length: mobileBuffer * 2 + 1 }, (_, slotIndex) => {
                        const offset = slotIndex - mobileBuffer;
                        return ((normalizedIndex + offset) % total + total) % total;
                    });

                    renderIndexes.forEach((index, slotIndex) => {
                        const clone = sourceCards[index].cloneNode(true);
                        clone.dataset.mobileRealIndex = String(index);
                        clone.dataset.mobileSlot = String(slotIndex - mobileBuffer);
                        fragment.appendChild(clone);
                    });

                    track.replaceChildren(fragment);
                    track.style.removeProperty("--marquee-shift");
                    track.dataset.mobileLoopMode = "virtual";
                    track.dataset.mobileBuffer = String(mobileBuffer);
                    track.dataset.mobileMiddleSlot = String(mobileBuffer);
                    return;
                }

                const groupWidth = sourceCards.reduce((total, card) => total + card.getBoundingClientRect().width, 0) + gap * Math.max(sourceCards.length - 1, 0);

                if (!groupWidth) {
                    return;
                }

                const averageCardWidth = sourceCards.reduce((total, card) => total + card.getBoundingClientRect().width, 0) / sourceCards.length;
                const visibleWidth = lane ? lane.clientWidth : window.innerWidth;
                const cardsPerView = Math.max(1, Math.ceil(visibleWidth / Math.max(averageCardWidth + gap, 1)));
                const groupsPerSide = Math.max(2, cardsPerView + 1);
                const desktopCopies = groupsPerSide * 2 + 1;
                const centerGroupIndex = groupsPerSide;

                for (let copyIndex = 0; copyIndex < desktopCopies; copyIndex += 1) {
                    sourceCards.forEach((card) => {
                        const clone = card.cloneNode(true);

                        if (copyIndex !== centerGroupIndex) {
                            clone.setAttribute("aria-hidden", "true");
                        } else {
                            clone.removeAttribute("aria-hidden");
                        }

                        fragment.appendChild(clone);
                    });
                }

                track.replaceChildren(fragment);
                track.dataset.desktopGroupWidth = String(groupWidth + gap);
                track.dataset.desktopStartOffset = String((groupWidth + gap) * centerGroupIndex);
                track.style.removeProperty("--marquee-shift");
                track.style.removeProperty("--marquee-from");
                track.style.removeProperty("--marquee-to");
                track.dataset.mobileLoopMode = "desktop";
            }

            function refreshMarquees() {
                document.querySelectorAll(".case-track, .testimonial-track").forEach((track) => {
                    buildMarqueeTrack(track);
                });
            }

            function getDesktopTickerDuration(lane, track) {
                if (track.classList.contains("testimonial-track")) {
                    return lane.classList.contains("testimonial-lane-rtl") ? 12.925 : 11.675;
                }

                return lane.classList.contains("case-lane-rtl") ? 120 : 106.65;
            }

            function setupDesktopTicker(lane) {
                if (!lane) {
                    return;
                }

                const isMobileCarousel = window.matchMedia("(max-width: 640px)").matches;
                const track = lane.querySelector(".case-track, .testimonial-track");

                if (!track) {
                    return;
                }

                if (isMobileCarousel) {
                    lane.dataset.desktopTickerReady = "";
                    return;
                }

                const gap = parseFloat(window.getComputedStyle(track).gap || "0");
                const cards = Array.from(track.children);

                if (!cards.length) {
                    return;
                }

                const totalWidth = parseFloat(track.dataset.desktopGroupWidth || "0") || (cards.reduce((total, card) => total + card.getBoundingClientRect().width, 0) + gap * Math.max(cards.length - 1, 0));
                const duration = getDesktopTickerDuration(lane, track);

                if (!totalWidth || !duration) {
                    return;
                }

                lane._tickerDirection = lane.classList.contains("case-lane-rtl") || lane.classList.contains("testimonial-lane-rtl") ? 1 : -1;
                lane._tickerSpeed = totalWidth / duration;

                if (lane.dataset.desktopTickerReady !== "true") {
                    lane._tickerOffset = -(parseFloat(track.dataset.desktopStartOffset || String(totalWidth)) || totalWidth);
                    lane._tickerLast = performance.now();
                    lane.dataset.desktopTickerReady = "true";
                }

                track.style.transform = `translateX(${lane._tickerOffset || 0}px)`;
            }

            function runDesktopTickers(now) {
                document.querySelectorAll(".case-lane, .testimonial-lane").forEach((lane) => {
                    if (lane.dataset.desktopTickerReady !== "true") {
                        return;
                    }

                    const isMobileCarousel = window.matchMedia("(max-width: 640px)").matches;
                    const track = lane.querySelector(".case-track, .testimonial-track");

                    if (!track || isMobileCarousel || document.hidden || lane.matches(":hover")) {
                        lane._tickerLast = now;
                        return;
                    }

                    const deltaSeconds = Math.min((now - (lane._tickerLast || now)) / 1000, 0.05);
                    lane._tickerLast = now;

                    const gap = parseFloat(window.getComputedStyle(track).gap || "0");
                    lane._tickerOffset = (lane._tickerOffset || 0) + lane._tickerDirection * lane._tickerSpeed * deltaSeconds;

                    if (lane._tickerDirection < 0) {
                        while (track.firstElementChild) {
                            const first = track.firstElementChild;
                            const step = first.getBoundingClientRect().width + gap;

                            if (-lane._tickerOffset < step) {
                                break;
                            }

                            lane._tickerOffset += step;
                            track.appendChild(first);
                        }
                    } else {
                        while (track.lastElementChild) {
                            const last = track.lastElementChild;
                            const step = last.getBoundingClientRect().width + gap;

                            if (lane._tickerOffset < step) {
                                break;
                            }

                            lane._tickerOffset -= step;
                            track.prepend(last);
                        }
                    }

                    track.style.transform = `translateX(${lane._tickerOffset}px)`;
                });

                window.requestAnimationFrame(runDesktopTickers);
            }

            function syncMobileLoopingLane(lane) {
                if (!lane) {
                    return;
                }

                const isMobileCarousel = window.matchMedia("(max-width: 640px)").matches;
                const track = lane.querySelector(".case-track, .testimonial-track");

                if (!track) {
                    return;
                }

                if (!isMobileCarousel) {
                    lane.dataset.loopReady = "";
                    lane.dataset.loopMode = "";
                    return;
                }

                if (track.dataset.mobileLoopMode === "virtual") {
                    const cards = Array.from(track.children);
                    const middleSlot = Number.parseInt(track.dataset.mobileMiddleSlot || String(Math.floor(cards.length / 2)), 10);
                    const middleCard = cards[middleSlot];

                    if (!middleCard) {
                        return;
                    }

                    lane.dataset.loopMode = "virtual";

                    const centerOnMiddle = () => {
                        lane.scrollLeft = middleCard.offsetLeft;
                    };

                    if (lane.dataset.loopReady !== "true") {
                        centerOnMiddle();
                        lane.dataset.loopReady = "true";
                    }

                    if (lane.dataset.loopBound !== "virtual") {
                        lane.addEventListener("scroll", () => {
                            if (lane._loopAdjusting === true) {
                                return;
                            }

                            if (lane._loopSettleTimer) {
                                window.clearTimeout(lane._loopSettleTimer);
                            }

                            lane._loopSettleTimer = window.setTimeout(() => {
                                const liveTrack = lane.querySelector(".case-track, .testimonial-track");
                                const liveCards = liveTrack ? Array.from(liveTrack.children) : [];
                                const liveMiddleSlot = Number.parseInt(liveTrack?.dataset.mobileMiddleSlot || String(Math.floor(liveCards.length / 2)), 10);
                                const liveMiddleCard = liveCards[liveMiddleSlot];

                                if (!liveTrack || !liveMiddleCard) {
                                    return;
                                }

                                const nearestSlot = liveCards.reduce((bestIndex, card, index) => {
                                    const bestDistance = Math.abs(lane.scrollLeft - liveCards[bestIndex].offsetLeft);
                                    const currentDistance = Math.abs(lane.scrollLeft - card.offsetLeft);
                                    return currentDistance < bestDistance ? index : bestIndex;
                                }, liveMiddleSlot);
                                const slotDelta = nearestSlot - liveMiddleSlot;

                                if (!slotDelta) {
                                    lane._loopAdjusting = true;
                                    lane.scrollTo({
                                        left: liveMiddleCard.offsetLeft,
                                        behavior: "smooth"
                                    });
                                    window.setTimeout(() => {
                                        lane._loopAdjusting = false;
                                    }, 220);
                                    return;
                                }

                                const total = liveTrack._sourceTemplates ? liveTrack._sourceTemplates.length : liveCards.length;
                                const currentIndex = Number.parseInt(liveTrack.dataset.mobileIndex || "0", 10) || 0;
                                const nextIndex = ((currentIndex + slotDelta) % total + total) % total;

                                liveTrack.dataset.mobileIndex = String(nextIndex);
                                buildMarqueeTrack(liveTrack);

                                const rerenderedTrack = lane.querySelector(".case-track, .testimonial-track");
                                const rerenderedCards = rerenderedTrack ? Array.from(rerenderedTrack.children) : [];
                                const rerenderedMiddleSlot = Number.parseInt(rerenderedTrack?.dataset.mobileMiddleSlot || String(Math.floor(rerenderedCards.length / 2)), 10);
                                const rerenderedMiddleCard = rerenderedCards[rerenderedMiddleSlot];

                                if (!rerenderedMiddleCard) {
                                    return;
                                }

                                lane._loopAdjusting = true;
                                lane.scrollLeft = rerenderedMiddleCard.offsetLeft;
                                window.setTimeout(() => {
                                    lane._loopAdjusting = false;
                                }, 40);
                            }, 110);
                        }, { passive: true });

                        lane.dataset.loopBound = "virtual";
                    }

                    return;
                }

                const loopWidth = parseFloat(track.style.getPropertyValue("--marquee-shift") || window.getComputedStyle(track).getPropertyValue("--marquee-shift") || "0");

                if (!loopWidth) {
                    return;
                }

                lane.dataset.loopMode = "marquee";
                lane.dataset.loopWidth = String(loopWidth);

                if (lane.dataset.loopReady !== "true") {
                    lane.scrollLeft = loopWidth;
                    lane.dataset.loopReady = "true";
                }

                if (lane.dataset.loopBound !== "marquee") {
                    lane.addEventListener("scroll", () => {
                        const width = parseFloat(lane.dataset.loopWidth || "0");

                        if (!width) {
                            return;
                        }

                        if (lane.scrollLeft < width * 0.5) {
                            lane.scrollLeft += width;
                        } else if (lane.scrollLeft > width * 1.5) {
                            lane.scrollLeft -= width;
                        }
                    }, { passive: true });

                    lane.dataset.loopBound = "marquee";
                }
            }

            function setupMobileAutoAdvance(lane) {
                if (!lane) {
                    return;
                }

                const isMobileCarousel = window.matchMedia("(max-width: 640px)").matches;
                const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

                if (!isMobileCarousel || reduceMotion) {
                    if (lane._autoAdvanceInterval) {
                        window.clearInterval(lane._autoAdvanceInterval);
                        lane._autoAdvanceInterval = null;
                    }

                    return;
                }

                if (lane._autoAdvanceBound !== true) {
                    const pauseAutoAdvance = () => {
                        lane._autoAdvancePausedUntil = Date.now() + 8000;
                    };

                    lane.addEventListener("pointerdown", pauseAutoAdvance, { passive: true });
                    lane.addEventListener("touchstart", pauseAutoAdvance, { passive: true });
                    lane.addEventListener("wheel", pauseAutoAdvance, { passive: true });
                    lane.addEventListener("scroll", () => {
                        if (lane._autoAdvanceInternal === true) {
                            return;
                        }

                        lane._autoAdvancePausedUntil = Date.now() + 8000;
                    }, { passive: true });

                    lane._autoAdvanceBound = true;
                }

                if (lane._autoAdvanceInterval) {
                    window.clearInterval(lane._autoAdvanceInterval);
                }

                lane._autoAdvanceInterval = window.setInterval(() => {
                    const track = lane.querySelector(".case-track, .testimonial-track");

                    if (!track || document.hidden) {
                        return;
                    }

                    if ((lane._autoAdvancePausedUntil || 0) > Date.now()) {
                        return;
                    }

                    const cards = Array.from(track.children);

                    if (!cards.length) {
                        return;
                    }

                    const current = lane.scrollLeft;
                    let targetCard = cards.find((card) => card.offsetLeft > current + 12);

                    if (lane.dataset.loopMode === "virtual") {
                        const middleSlot = Number.parseInt(track.dataset.mobileMiddleSlot || String(Math.floor(cards.length / 2)), 10);
                        targetCard = cards[middleSlot + 1] || cards[middleSlot];
                    } else {
                        const width = parseFloat(lane.dataset.loopWidth || "0");

                        if (!width) {
                            return;
                        }

                        if (!targetCard) {
                            targetCard = cards.find((card) => card.offsetLeft >= width);
                        }
                    }

                    if (!targetCard) {
                        return;
                    }

                    lane._autoAdvanceInternal = true;
                    lane.scrollTo({
                        left: targetCard.offsetLeft,
                        behavior: "smooth"
                    });

                    window.setTimeout(() => {
                        lane._autoAdvanceInternal = false;
                    }, 650);
                }, 5200);
            }

            refreshMarquees();
            document.querySelectorAll(".case-lane, .testimonial-lane").forEach((lane) => {
                setupDesktopTicker(lane);
                syncMobileLoopingLane(lane);
                setupMobileAutoAdvance(lane);
            });

            window.requestAnimationFrame(runDesktopTickers);

            let marqueeResizeFrame = null;

            window.addEventListener("resize", () => {
                if (marqueeResizeFrame) {
                    window.cancelAnimationFrame(marqueeResizeFrame);
                }

                marqueeResizeFrame = window.requestAnimationFrame(() => {
                    refreshMarquees();
                    document.querySelectorAll(".case-lane, .testimonial-lane").forEach((lane) => {
                        setupDesktopTicker(lane);
                        syncMobileLoopingLane(lane);
                        setupMobileAutoAdvance(lane);
                    });
                    marqueeResizeFrame = null;
                });
            }, { passive: true });

            renderSystemSummary();

            document.querySelectorAll(".system-option").forEach((button) => {
                button.addEventListener("click", () => {
                    const slot = button.dataset.slot;
                    const value = button.dataset.value;

                    document.querySelectorAll(`.system-option[data-slot="${slot}"]`).forEach((option) => {
                        option.classList.toggle("is-active", option === button);
                    });

                    document.querySelectorAll(`[data-copy-target="${slot}"]`).forEach((node) => {
                        node.textContent = button.dataset.copy || "";
                    });

                    document.querySelectorAll(`[data-current="${slot}"]`).forEach((node) => {
                        node.textContent = value;
                    });

                    document.querySelectorAll(`[data-link-target="${slot}"]`).forEach((node) => {
                        node.href = button.dataset.url || "#";
                    });

                    renderSystemSummary();
                });
            });

            const faqItems = Array.from(document.querySelectorAll(".faq-item"));

            function syncFaqPanels() {
                faqItems.forEach((item) => {
                    const trigger = item.querySelector(".faq-trigger");
                    const panel = item.querySelector(".faq-panel");
                    const isOpen = item.classList.contains("is-open");

                    if (!trigger || !panel) {
                        return;
                    }

                    trigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
                    panel.style.maxHeight = isOpen ? panel.scrollHeight + "px" : "0px";
                });
            }

            syncFaqPanels();

            faqItems.forEach((item) => {
                const trigger = item.querySelector(".faq-trigger");

                if (!trigger) {
                    return;
                }

                trigger.addEventListener("click", () => {
                    const shouldOpen = !item.classList.contains("is-open");

                    faqItems.forEach((entry) => {
                        entry.classList.remove("is-open");
                    });

                    if (shouldOpen) {
                        item.classList.add("is-open");
                    }

                    syncFaqPanels();
                });
            });
        
})();
