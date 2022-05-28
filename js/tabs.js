const TABS = {
    choose(x, stab=false) {
        if (!stab) {
            if (x==5) tmp.sn_tab = tmp.tab
            tmp.tab = x
            if (x!=5) {
                tmp.sn_tab = tmp.tab
                tree_update = true
            }
        }
        else tmp.stab[tmp.tab] = x
    },
    1: [
        { id: "Main" },
        { id: "Stats", unl() { return player.ranks.rank.gt(0) || player.ranks.tier.gt(0) || player.rp.unl } },
        { id: "Upgrades", unl() { return player.rp.unl && !zeta() } },
        { id: "Challenges", unl() { return player.chal.unl } },
        { id: "Atom", unl() { return player.atom.unl && !zeta() }, style: "atom" },
        { id: "Supernova", unl() { return player.supernova.unl } },
        { id: "Exotic", unl() { return EXT.unl() } },
        { id: "Zeta", unl() { return zeta() } },
        { id: "Options" },
    ],
    2: {
        0: [
            { id: "Mass" },
            { id: "Black Hole", unl() { return player.bh.unl && !zeta() }, style: "bh" },
            { id: "Atomic Generator", unl() { return player.atom.unl && !zeta() }, style: "atom" },
            { id: "Stars", unl() { return STARS.unlocked() && !zeta() } },
        ],
        1: [
            { id: "Ranks Rewards" },
            { id: "Scaling", unl() { return tmp.scaling ? tmp.scaling.super.length>0 : false } },
        ],
        4: [
            { id: "Particles" },
            { id: "Elements", unl() { return player.chal.comps[7].gte(16) || player.supernova.unl } },
            { id: "Mass Dilation", unl() { return MASS_DILATION.unlocked() }, style: "dilation" },
        ],
        5: [
            { id: "Neutron Tree" },
            { id: "Bosons", unl() { return player.supernova.post_10 } },
            { id: "Fermions", unl() { return player.supernova.fermions.unl } },
            { id: "Radiation", unl() { return tmp.radiation.unl } },
        ],
        6: [
            { id: "Axions" },
            { id: "Chroma", unl() { return player.ext.ch.unl || zeta() } },
            { id: "Primordium", unl() { return player.chal.comps[15].gte(1) || zeta() } },
            { id: "Entropy", unl() { return zeta() } },
            { id: "Big Rip", unl() { return zeta() } }
        ],
    },
}