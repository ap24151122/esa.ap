// This file contains all the economic shocks data
const shocks = [
    {
        "id": "gov_spending",
        "name": "Government Spending"
    },
    {
        "id": "taxes",
        "name": "Taxes"
    },
    {
        "id": "interest_rates",
        "name": "Interest Rates"
    },
    {
        "id": "exports",
        "name": "Exports"
    },
    {
        "id": "imports",
        "name": "Imports"
    },
    {
        "id": "productivity",
        "name": "Productivity (Technology)"
    },
    {
        "id": "consumer_confidence",
        "name": "Consumer Confidence"
    }
];

// Impact data for each shock
const shockImpacts = {
    "gov_spending": {
        "increase": {
            "results": [
                {"indicator": "Output (GDP)", "effect": "INCREASES", "description": "Higher government spending directly adds to GDP"},
                {"indicator": "Inflation", "effect": "INCREASES", "description": "More demand in the economy can push prices up"},
                {"indicator": "Interest Rates", "effect": "MAY INCREASE", "description": "Central banks may raise rates to counter inflation"}
            ],
            "conclusion": {
                "short_term": "In the short term, increased government spending is likely to boost economic output, create jobs, and increase overall demand in the economy. This may lead to higher inflation as demand outpaces supply capacity.",
                "long_term": "Long-term effects depend on what the spending is used for. Infrastructure and education spending may improve productivity and economic capacity, while continued deficit spending may lead to higher interest rates, potential crowding out of private investment, and increased national debt burden."
            },
            "graph_data": {
                "AD_AS": {
                    "shift": "right",
                    "curve": "AD"
                },
                "IS_LM": {
                    "shift": "right",
                    "curve": "IS"
                },
                "Phillips": {
                    "shift": "right"
                },
                "PPF": {
                    "shift": "none"
                }
            }
        },
        "decrease": {
            "results": [
                {"indicator": "Output (GDP)", "effect": "DECREASES", "description": "Lower government spending reduces direct contribution to GDP"},
                {"indicator": "Inflation", "effect": "DECREASES", "description": "Less demand in the economy reduces price pressures"},
                {"indicator": "Interest Rates", "effect": "MAY DECREASE", "description": "Central banks may lower rates to stimulate growth"}
            ],
            "conclusion": {
                "short_term": "In the short term, reduced government spending typically leads to slower economic growth, potential job losses in the public sector, and reduced aggregate demand in the economy. This can lead to lower inflation as demand decreases.",
                "long_term": "Long-term effects may include improved fiscal balance and reduced public debt burden if spending cuts are maintained. However, if cuts affect infrastructure, education, or research, there may be negative impacts on long-term economic capacity and productivity growth."
            },
            "graph_data": {
                "AD_AS": {
                    "shift": "left",
                    "curve": "AD"
                },
                "IS_LM": {
                    "shift": "left",
                    "curve": "IS"
                },
                "Phillips": {
                    "shift": "left"
                },
                "PPF": {
                    "shift": "none"
                }
            }
        }
    },
    "taxes": {
        "increase": {
            "results": [
                {"indicator": "Output (GDP)", "effect": "DECREASES", "description": "Lower disposable income reduces consumption"},
                {"indicator": "Inflation", "effect": "DECREASES", "description": "Lower demand typically reduces price pressures"},
                {"indicator": "Interest Rates", "effect": "MAY DECREASE", "description": "Central banks may cut rates to stimulate growth"}
            ],
            "conclusion": {
                "short_term": "In the short term, tax increases typically reduce consumer spending and business investment as they lower disposable income and after-tax profits. This can slow economic growth and reduce inflationary pressures.",
                "long_term": "Long-term effects depend on how tax revenue is used. If used for deficit reduction, it may improve fiscal sustainability. If invested in infrastructure, education, or healthcare, it may increase long-term productivity and growth potential."
            },
            "graph_data": {
                "AD_AS": {
                    "shift": "left",
                    "curve": "AD"
                },
                "IS_LM": {
                    "shift": "left",
                    "curve": "IS"
                },
                "Phillips": {
                    "shift": "left"
                },
                "PPF": {
                    "shift": "none"
                }
            }
        },
        "decrease": {
            "results": [
                {"indicator": "Output (GDP)", "effect": "INCREASES", "description": "Higher disposable income boosts consumption"},
                {"indicator": "Inflation", "effect": "INCREASES", "description": "Higher demand can push prices up"},
                {"indicator": "Interest Rates", "effect": "MAY INCREASE", "description": "Central banks may raise rates to counter inflation"}
            ],
            "conclusion": {
                "short_term": "In the short term, tax cuts typically increase consumer spending and business investment by increasing disposable income and business profits. This can stimulate economic growth but may increase inflationary pressures.",
                "long_term": "Long-term effects depend on how tax cuts are financed. If not offset by spending cuts, they may increase budget deficits and public debt. Potential benefits include increased private sector investment, but effects on economic growth remain debated among economists."
            },
            "graph_data": {
                "AD_AS": {
                    "shift": "right",
                    "curve": "AD"
                },
                "IS_LM": {
                    "shift": "right",
                    "curve": "IS"
                },
                "Phillips": {
                    "shift": "right"
                },
                "PPF": {
                    "shift": "none"
                }
            }
        }
    },
    "interest_rates": {
        "increase": {
            "results": [
                {"indicator": "Output (GDP)", "effect": "DECREASES", "description": "Higher borrowing costs reduce consumption and investment"},
                {"indicator": "Inflation", "effect": "DECREASES", "description": "Lower economic activity reduces price pressures"},
                {"indicator": "Interest Rates", "effect": "INCREASES", "description": "Direct policy action by central bank"}
            ],
            "conclusion": {
                "short_term": "In the short term, higher interest rates typically reduce borrowing, spending, and investment. This leads to slower economic growth as consumption and business investment decline. Housing markets and durable goods are particularly affected.",
                "long_term": "Long-term effects include lower inflation, which can help maintain price stability in the economy. While growth may initially slow, a successfully executed interest rate policy may lead to more sustainable growth in the future by preventing boom-bust cycles."
            },
            "graph_data": {
                "AD_AS": {
                    "shift": "left",
                    "curve": "AD"
                },
                "IS_LM": {
                    "shift": "right",
                    "curve": "LM"
                },
                "Phillips": {
                    "shift": "left"
                },
                "PPF": {
                    "shift": "none"
                }
            }
        },
        "decrease": {
            "results": [
                {"indicator": "Output (GDP)", "effect": "INCREASES", "description": "Lower borrowing costs boost consumption and investment"},
                {"indicator": "Inflation", "effect": "INCREASES", "description": "Higher economic activity can increase prices"},
                {"indicator": "Interest Rates", "effect": "DECREASES", "description": "Direct policy action by central bank"}
            ],
            "conclusion": {
                "short_term": "In the short term, lower interest rates typically boost borrowing, consumer spending, and business investment. Housing markets and durable goods purchases often increase quickly. The economy typically experiences higher growth.",
                "long_term": "Over the long term, continued low interest rates may lead to higher inflation and asset price bubbles if maintained too long. They also reduce returns for savers and can encourage excessive risk-taking in financial markets."
            },
            "graph_data": {
                "AD_AS": {
                    "shift": "right",
                    "curve": "AD"
                },
                "IS_LM": {
                    "shift": "left",
                    "curve": "LM"
                },
                "Phillips": {
                    "shift": "right"
                },
                "PPF": {
                    "shift": "none"
                }
            }
        }
    },
    "exports": {
        "increase": {
            "results": [
                {"indicator": "Output (GDP)", "effect": "INCREASES", "description": "Higher exports represent more demand for domestic products"},
                {"indicator": "Inflation", "effect": "MAY INCREASE", "description": "Higher demand can put upward pressure on prices"},
                {"indicator": "Trade Balance", "effect": "IMPROVES", "description": "More exports relative to imports improves trade balance"}
            ],
            "conclusion": {
                "short_term": "In the short term, increased exports boost GDP directly by increasing aggregate demand. Domestic producers expand output to meet foreign demand, creating jobs and increasing incomes while improving the trade balance.",
                "long_term": "Over the long term, export-oriented industries may expand and attract more investment. A country's currency may strengthen, and specialized industries may develop further competitive advantages in the global market."
            },
            "graph_data": {
                "AD_AS": {
                    "shift": "right",
                    "curve": "AD"
                },
                "IS_LM": {
                    "shift": "right",
                    "curve": "IS"
                },
                "Phillips": {
                    "shift": "right"
                },
                "PPF": {
                    "shift": "none"
                }
            }
        },
        "decrease": {
            "results": [
                {"indicator": "Output (GDP)", "effect": "DECREASES", "description": "Lower exports mean less demand for domestic products"},
                {"indicator": "Inflation", "effect": "MAY DECREASE", "description": "Lower demand can reduce price pressures"},
                {"indicator": "Trade Balance", "effect": "WORSENS", "description": "Fewer exports relative to imports worsens trade balance"}
            ],
            "conclusion": {
                "short_term": "In the short term, decreased exports reduce GDP by decreasing aggregate demand. Domestic producers may need to cut production and reduce their workforce, leading to rising unemployment and falling incomes.",
                "long_term": "Over the long term, a prolonged export decline can cause export-oriented industries to contract and lose global market share. This may result in structural unemployment and potentially a weakening currency."
            },
            "graph_data": {
                "AD_AS": {
                    "shift": "left",
                    "curve": "AD"
                },
                "IS_LM": {
                    "shift": "left",
                    "curve": "IS"
                },
                "Phillips": {
                    "shift": "left"
                },
                "PPF": {
                    "shift": "none"
                }
            }
        }
    },
    "imports": {
        "increase": {
            "results": [
                {"indicator": "Output (GDP)", "effect": "MAY DECREASE", "description": "Higher imports can replace domestic production"},
                {"indicator": "Inflation", "effect": "DECREASES", "description": "Cheaper imports can reduce price pressures"},
                {"indicator": "Trade Balance", "effect": "WORSENS", "description": "More imports relative to exports worsens trade balance"}
            ],
            "conclusion": {
                "short_term": "In the short term, increased imports may reduce GDP if they substitute domestic production. However, they typically lower inflation by increasing the supply of goods and introducing more competition, benefiting consumers through lower prices.",
                "long_term": "Over the long term, higher imports may lead to trade deficits and pressure on the domestic currency. However, they can also increase economic efficiency by allowing specialization and providing access to a wider variety of goods and production inputs."
            },
            "graph_data": {
                "AD_AS": {
                    "shift": "left",
                    "curve": "AD"
                },
                "IS_LM": {
                    "shift": "left",
                    "curve": "IS"
                },
                "Phillips": {
                    "shift": "left"
                },
                "PPF": {
                    "shift": "none"
                }
            }
        },
        "decrease": {
            "results": [
                {"indicator": "Output (GDP)", "effect": "MAY INCREASE", "description": "Lower imports may be replaced by domestic production"},
                {"indicator": "Inflation", "effect": "MAY INCREASE", "description": "Fewer imports can lead to higher prices for domestic alternatives"},
                {"indicator": "Trade Balance", "effect": "IMPROVES", "description": "Fewer imports relative to exports improves trade balance"}
            ],
            "conclusion": {
                "short_term": "In the short term, decreased imports may boost GDP if domestic production replaces them. The trade balance typically improves, but consumers may face higher prices and less product variety as competition from foreign products decreases.",
                "long_term": "Long-term effects depend on whether domestic industries can efficiently replace imports. While the trade balance may improve, reduced international competition and limited access to specialized inputs may hamper overall economic efficiency."
            },
            "graph_data": {
                "AD_AS": {
                    "shift": "right",
                    "curve": "AD"
                },
                "IS_LM": {
                    "shift": "right",
                    "curve": "IS"
                },
                "Phillips": {
                    "shift": "right"
                },
                "PPF": {
                    "shift": "none"
                }
            }
        }
    },
    "productivity": {
        "increase": {
            "results": [
                {"indicator": "Output (GDP)", "effect": "INCREASES", "description": "More efficient production processes boost output"},
                {"indicator": "Inflation", "effect": "DECREASES", "description": "More output per input reduces production costs"},
                {"indicator": "Living Standards", "effect": "INCREASES", "description": "Higher productivity enables higher wages"}
            ],
            "conclusion": {
                "short_term": "In the short term, increased productivity allows firms to produce more with the same inputs, reducing costs and potentially allowing for lower prices. This can boost output and competitiveness while controlling inflation.",
                "long_term": "Over the long term, productivity growth is the key driver of rising living standards. It enables sustainable wage growth without inflationary pressure and expands the economy's production possibilities frontier."
            },
            "graph_data": {
                "AD_AS": {
                    "shift": "right",
                    "curve": "AS"
                },
                "IS_LM": {
                    "shift": "none",
                    "curve": "none"
                },
                "Phillips": {
                    "shift": "left"
                },
                "PPF": {
                    "shift": "outward"
                }
            }
        },
        "decrease": {
            "results": [
                {"indicator": "Output (GDP)", "effect": "DECREASES", "description": "Less efficient production reduces output potential"},
                {"indicator": "Inflation", "effect": "MAY INCREASE", "description": "Higher production costs can lead to price increases"},
                {"indicator": "Living Standards", "effect": "DECREASES", "description": "Lower productivity constrains wage growth"}
            ],
            "conclusion": {
                "short_term": "In the short term, decreased productivity means higher costs per unit of output, which may lead to higher prices, reduced competitiveness, and lower output. Firms may need to reduce wages or employment.",
                "long_term": "Over the long term, persistent productivity decline leads to stagnating living standards, as there is less output to distribute. This can constrain economic growth and put pressure on wages and profits simultaneously."
            },
            "graph_data": {
                "AD_AS": {
                    "shift": "left",
                    "curve": "AS"
                },
                "IS_LM": {
                    "shift": "none",
                    "curve": "none"
                },
                "Phillips": {
                    "shift": "right"
                },
                "PPF": {
                    "shift": "inward"
                }
            }
        }
    },
    "consumer_confidence": {
        "increase": {
            "results": [
                {"indicator": "Consumption", "effect": "INCREASES", "description": "Confident consumers spend more and save less"},
                {"indicator": "Output (GDP)", "effect": "INCREASES", "description": "Higher consumption boosts economic activity"},
                {"indicator": "Investment", "effect": "INCREASES", "description": "Business responds to higher demand expectations"}
            ],
            "conclusion": {
                "short_term": "In the short term, increased consumer confidence typically boosts consumer spending, especially on durable goods and discretionary items. This increases aggregate demand and economic activity, potentially creating a positive feedback loop.",
                "long_term": "Long-term effects depend on whether the confidence is based on fundamentals. Sustainable confidence can support long-term growth, but if confidence exceeds economic fundamentals, it may lead to unsustainable spending and potential bubbles."
            },
            "graph_data": {
                "AD_AS": {
                    "shift": "right",
                    "curve": "AD"
                },
                "IS_LM": {
                    "shift": "right",
                    "curve": "IS"
                },
                "Phillips": {
                    "shift": "right"
                },
                "PPF": {
                    "shift": "none"
                }
            }
        },
        "decrease": {
            "results": [
                {"indicator": "Consumption", "effect": "DECREASES", "description": "Worried consumers cut spending and increase saving"},
                {"indicator": "Output (GDP)", "effect": "DECREASES", "description": "Lower consumption reduces economic activity"},
                {"indicator": "Investment", "effect": "DECREASES", "description": "Businesses reduce investment amid weak demand"}
            ],
            "conclusion": {
                "short_term": "In the short term, decreased consumer confidence typically reduces consumer spending as households increase precautionary saving. This can create a self-reinforcing cycle of reduced spending, lower business revenue, and further confidence deterioration.",
                "long_term": "Long-term low confidence can lead to persistent economic weakness as businesses hold back on investment, innovation, and hiring. However, if confidence was previously excessive, a moderation may help prevent bubbles and promote sustainable growth."
            },
            "graph_data": {
                "AD_AS": {
                    "shift": "left",
                    "curve": "AD"
                },
                "IS_LM": {
                    "shift": "left",
                    "curve": "IS"
                },
                "Phillips": {
                    "shift": "left"
                },
                "PPF": {
                    "shift": "none"
                }
            }
        }
    }
};