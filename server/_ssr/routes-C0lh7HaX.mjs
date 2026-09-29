import { n as __toESM } from "../_runtime.mjs";
import { a as volunteer, i as training, n as profile, r as publications, t as navLinks } from "./content-Cce-UW7u.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C0lh7HaX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var headshot_default = "/portfolio-site/assets/headshot-Cq9dcunW.jpg";
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "border-b border-line/70",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-12 md:items-center md:gap-0 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-5 md:pr-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "text-balance font-display text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl md:text-6xl",
						children: [
							profile.name,
							", ",
							profile.credentials
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground",
						children: profile.role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-[46ch] text-pretty text-base leading-relaxed text-muted-foreground",
						children: profile.about
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:col-span-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: headshot_default,
					alt: `Portrait of ${profile.name}`,
					width: 1088,
					height: 1440,
					className: "h-full min-h-[320px] w-full bg-brand-soft object-cover object-top outline-1 -outline-offset-1 outline-black/5 md:aspect-[5/4] md:h-auto md:min-h-0"
				})
			})]
		})
	});
}
function Publications() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "research",
		className: "border-b border-line/70",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6 py-16 md:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-12 flex flex-wrap items-baseline justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-balance font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl",
					children: "Research and Publications"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground",
					children: "Selected"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "divide-y divide-line/70",
				children: publications.map((pub) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: pub.url,
					target: "_blank",
					rel: "noreferrer",
					className: "group flex items-start gap-4 py-5 transition-transform duration-150 hover:translate-x-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-12 shrink-0 pt-0.5 font-mono text-xs text-muted-foreground",
							children: pub.year
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-base font-medium leading-snug text-ink transition-colors duration-150 group-hover:text-brand",
								children: pub.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-1 block text-sm text-muted-foreground",
								children: [
									pub.citation,
									" ·",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic",
										children: pub.journal
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "pt-0.5 font-mono text-sm text-brand transition-transform duration-150 group-hover:translate-x-1",
							"aria-hidden": "true",
							children: "→"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "Opens in a new tab"
						})
					]
				}) }, pub.url))
			})]
		})
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-ink text-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-lg font-semibold",
				children: profile.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-paper/60",
				children: ["Orthodontics · ", profile.institution]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "font-mono text-xs text-paper/70",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `mailto:${profile.email}`,
					className: "transition-colors duration-150 hover:text-paper",
					children: profile.email
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1",
					children: profile.phone
				})]
			})]
		})
	});
}
function SiteHeader() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "border-b border-line/70 bg-panel/70 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-baseline gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-lg font-semibold tracking-tight text-ink",
					children: profile.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:inline",
					children: "Orthodontics"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex w-full flex-wrap items-center justify-between gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:w-auto sm:justify-end sm:gap-x-6 sm:text-[11px]",
				children: navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link.href,
					className: "transition-colors duration-150 hover:text-ink",
					children: link.label
				}, link.href))
			})]
		})
	});
}
function TrainingTimeline() {
	const railRef = (0, import_react.useRef)(null);
	const [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const rail = railRef.current;
		if (!rail) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setProgress(1);
			return;
		}
		let frame = 0;
		const measure = () => {
			frame = 0;
			const rect = rail.getBoundingClientRect();
			const anchor = window.innerHeight * .62;
			const ratio = rect.height > 0 ? (anchor - rect.top) / rect.height : 0;
			setProgress(Math.min(1, Math.max(0, ratio)));
		};
		const onScroll = () => {
			if (!frame) frame = requestAnimationFrame(measure);
		};
		measure();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			if (frame) cancelAnimationFrame(frame);
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "training",
		className: "border-b border-line/70 bg-panel/60",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6 py-16 md:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-12 flex flex-wrap items-baseline justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-balance font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl",
					children: "Education and Training"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground",
					children: [training[0]?.year, " – Present"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: railRef,
				className: "relative pl-8 md:pl-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 top-0 w-px bg-line" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-0 top-0 w-px bg-brand transition-[height] duration-200 ease-out",
						style: { height: `${progress * 100}%` },
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "space-y-10",
						children: training.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -left-8 top-1.5 size-2 -translate-x-1/2 rounded-full bg-brand md:-left-12" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1 sm:flex-row sm:gap-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-16 shrink-0 font-mono text-xs text-brand",
									children: entry.year
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-lg font-semibold text-ink",
									children: entry.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: entry.detail
								})] })]
							})]
						}, `${entry.year}-${entry.title}`))
					})
				]
			})]
		})
	});
}
function VolunteerWork() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "volunteer",
		className: "bg-panel/60",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6 py-16 md:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-12 flex flex-wrap items-baseline justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-balance font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl",
					children: "Outside the Clinic"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground",
					children: "Community"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: volunteer.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group relative overflow-hidden rounded-[min(1vw,12px)] bg-brand-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.image,
						alt: item.alt,
						width: 1024,
						height: 1280,
						loading: "lazy",
						className: "aspect-[4/5] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-x-0 bottom-0 translate-y-full bg-ink/85 p-4 transition-transform duration-200 ease-out group-hover:translate-y-0 no-hover:translate-y-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-base font-semibold text-paper",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-paper/80",
							children: item.blurb
						})]
					})]
				}, item.title))
			})]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper font-sans text-ink antialiased",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrainingTimeline, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Publications, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolunteerWork, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Index as component };
