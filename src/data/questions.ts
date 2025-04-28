export interface ArchetypeScore {
    primary: keyof typeof ARCHETYPES;
    secondary: keyof typeof ARCHETYPES | null;
  }
  
  export interface Answer {
    text: string;
    archetypes: ArchetypeScore;
    weight: number;
  }
  
  export interface Question {
    id: number;
    text: string;
    answers: Answer[];
    chapter: string;
    weight: number;
  }
  
  export const ARCHETYPES = {
    BUILDER: "Builder",
    DAO_DIPLOMAT: "DAO Diplomat",
    ONCHAIN_MAXIMALIST: "Onchain Maxi",
    IDEA_GUY: "Idea Bot",
    DEFI_DEGEN: "DeFi Degen",
    BAGHOLDER: "HODLer",
    PANIC_SELLER: "Panic Seller",
    RUG_MAGNET: "Rug Magnet",
    SHITPOSTER: "Shitposter",
    MEMECOIN_SUMMONER: "Memecoin Ape",
    CT_ADDICT: "CT Addict",
    LARP_LORD: "Retardio",
    AIRDROP_FOMOER: "Drop Addict",
    LAUNCHPAD_HOPPER: "IDO Junkie",
    NFT_ROMANTIC: "NFT Romeo",
    EXPLORER: "Explorer"
  } as const;
  
 
  export const questions: Question[] = [
      {
        id: 0,
        chapter: "CHAPTER 1",
        text: "You wake up to your phone exploding with notifications. $PEPEZK69 just launched. No roadmap. Just vibes. Your group chat is losing its mind. What do you do?",
        weight: 1.5,
        answers: [
          {
            text: "Mint 10 and drop a meme about how I'm early.",
            archetypes: { "primary": "MEMECOIN_SUMMONER", "secondary": "DEFI_DEGEN" },
            weight: 1.5
          },
          {
            text: "Ae yo...just ape in and pray. Let's gooooo.",
            archetypes: { "primary": "DEFI_DEGEN", "secondary": "LAUNCHPAD_HOPPER" },
            weight: 1.5
          },
          {
            text: "Is there an airdrop for this? I'm not minting unless I get free stuff.",
            archetypes: { "primary": "AIRDROP_FOMOER", "secondary": "EXPLORER" },
            weight: 0.5
          },
          {
            text: "Gotta check for audit report. Security first, vibes second.",
            archetypes: { "primary": "BUILDER", "secondary": "ONCHAIN_MAXIMALIST" },
            weight: 2
          },
        ]
      },
      {
        id: 1,
        chapter: "CHAPTER 2",
        text: "The DAO votes are in. Half want to go full memecoin. The other half wants to actually build something. You're in the middle of this beautiful mess.",
        weight: 2,
        answers: [
          {
            text: "I'm writing a 12-page proposal to fix everything. You guys just don't get it.",
            archetypes: { "primary": "DAO_DIPLOMAT", "secondary": "BUILDER" },
            weight: 2
          },
          {
            text: "I'm going to screenshot this chaos and make it my Twitter header.",
            archetypes: { "primary": "CT_ADDICT", "secondary": "LARP_LORD" },
            weight: 1.5
          },
          {
            text: "I'm selling my DAO tokens. Too much drama. I'm out.",
            archetypes: { "primary": "PANIC_SELLER", "secondary": "EXPLORER" },
            weight: 1
          },
          {
            text: "Forget it, I'm launching my own project and DAO the way in. LFGGG!",
            archetypes: { "primary": "IDEA_GUY", "secondary": "LARP_LORD" },
            weight: 1
          }
        ]
      },
      {
        id: 2,
        chapter: "CHAPTER 3",
        text: "Your favorite NFT collection just dived 95% down. Everyone's freaking out. You’ve got 3 of these overpriced JPEGs. What'd next?",
        weight: 2,
        answers: [
          {
            text: "Buy the dip. Art is forever. And so is my empty wallet.",
            archetypes: { "primary": "NFT_ROMANTIC", "secondary": "MEMECOIN_SUMMONER" },
            weight: 2
          },
          {
            text: "Sell 2 of them for 0.0001 ETH and pray the other one moons.",
            archetypes: { "primary": "LAUNCHPAD_HOPPER", "secondary": "AIRDROP_FOMOER" },
            weight: 0.5
          },
          {
            text: "Might as well launch my own NFT collection. Utility or vibes?",
            archetypes: { "primary": "BUILDER", "secondary": "IDEA_GUY" },
            weight: 1.5
          },
          {
            text: "I’m cutting losses. Let’s get out of here before it gets worse.",
            archetypes: { "primary": "PANIC_SELLER", "secondary": "EXPLORER" },
            weight: 1.5
          }
        ]
      },
      {
        id: 3,
        chapter: "CHAPTER 4",
        text: "You clicked a link. It was gonna make you a millionaire...and now your wallet is empty. What’s your reaction?",
        weight: 1.5,
        answers: [
          {
            text: "I am leaving crypo and never coming back. (yeah...right)",
            archetypes: { "primary": "CT_ADDICT", "secondary": "NFT_ROMANTIC" },
            weight: 1
          },
          {
            text: "Time to tweet: 'Just got rugged. Anyone else?'",
            archetypes: { "primary": "SHITPOSTER", "secondary": "MEMECOIN_SUMMONER" },
            weight: 0.5
          },
          {
            text: "I’m on Etherscan tracking these mfers. They can't hide forever.",
            archetypes: { "primary": "BUILDER", "secondary": "ONCHAIN_MAXIMALIST" },
            weight: 1.5
          },
          {
            text: "Go on to write walls about all problems in crypto faced by noobs.",
            archetypes: { "primary": "SHITPOSTER", "secondary": "PANIC_SELLER" },
            weight: 1
          }
        ]
      },
      {
        id: 4,
        chapter: "CHAPTER 5",
        text: "$DOGE is up 500x. Again. And you missed it. How do you feel?",
        weight: 1.5,
        answers: [
          {
            text: "Everything happens for the best. But my best don't want me to be rich!!",
            archetypes: { "primary": "LAUNCHPAD_HOPPER", "secondary": "DEFI_DEGEN" },
            weight: 1.5
          },
          {
            text: "I’m buying the top and posting ‘called it.’ Who cares about timing?",
            archetypes: { "primary": "SHITPOSTER", "secondary": "EXPLORER" },
            weight: 1
          },
          {
            text: "I’m posting a meme about how the market’s just a casino.",
            archetypes: { "primary": "ONCHAIN_MAXIMALIST", "secondary": "RUG_MAGNET" },
            weight: 2
          },
          {
            text: "Second time's a charm. Ain't no one taking free stuff from me baby!",
            archetypes: { "primary": "AIRDROP_FOMOER", "secondary": "CT_ADDICT" },
            weight: 1
          }
        ]
      },
      {
        id: 5,
        chapter: "CHAPTER 6",
        text: "A large VC tweets, “Crypto is dying.” The timeline is in flames. Your response?",
        weight: 2,
        answers: [
          {
            text: "I’m drafting 15 threads explaining why they’re wrong. They’re just not looking deep enough.",
            archetypes: { "primary": "ONCHAIN_MAXIMALIST", "secondary": "DAO_DIPLOMAT" },
            weight: 1
          },
          {
            text: "Reply with 'real' and get 100 retweets. Let’s go viral.",
            archetypes: { "primary": "SHITPOSTER", "secondary": "IDEA_GUY" },
            weight: 1.5
          },
          {
            text: "Blindly retweets, comments, likes, and follows...to get that sweet sweet job offer.",
            archetypes: { "primary": "LARP_LORD", "secondary": "CT_ADDICT" },
            weight: 1.5
          },
          {
            text: "I’m unfollowing everyone. I don't need stupidity on my TL. ",
            archetypes: { "primary": "BAGHOLDER", "secondary": "BUILDER" },
            weight: 1
          }
        ]
      },
      {
        id: 6,
        chapter: "CHAPTER 7",
        text: "Minting is live, but gas price is maxxing out. You need to act now or stock is gone.",
        weight: 1.5,
        answers: [
          {
            text: "Analyse least gas fees, time the market, and attack!",
            archetypes: { "primary": "ONCHAIN_MAXIMALIST", "secondary": "DEFI_DEGEN" },
            weight: 2
          },
          {
            text: "Screw it. I’ll pay the even 1 ETH gas. This is how legends are made.",
            archetypes: { "primary": "NFT_ROMANTIC", "secondary": "LAUNCHPAD_HOPPER" },
            weight: 1
          },
          {
            text: "Who cares...It's another JPEG anyways.",
            archetypes: { "primary": "SHITPOSTER", "secondary": "PANIC_SELLER" },
            weight: 1.5
          },
          {
            text: "Wait…is there an airdrop for this gas war? cause m eating then!",
            archetypes: { "primary": "AIRDROP_FOMOER", "secondary": "MEMECOIN_SUMMONER" },
            weight: 1
          }
        ]
      },
      {
        id: 7,
        chapter: "CHAPTER 8",
        text: "You’re stuck in a meeting with Web2 execs who are completely clueless about Web3. They want to know what you’re building. What do you say?",
        weight: 1.5,
        answers: [
          {
            text: "It’s like a bank, but without irritated employees... or the trust.",
            archetypes: { "primary": "DAO_DIPLOMAT", "secondary": "BUILDER" },
            weight: 1.5
          },
          {
            text: "It’s like Facebook, but for people who actually want privacy.",
            archetypes: { "primary": "ONCHAIN_MAXIMALIST", "secondary": "DEFI_DEGEN" },
            weight: 1
          },
          {
            text: "Imagine if your company was controlled by your users... yeah exactly that.",
            archetypes: { "primary": "SHITPOSTER", "secondary": "CT_ADDICT" },
            weight: 1
          },
          {
            text: "It’s like the stock market, but with way more scams and stress",
            archetypes: { "primary": "DEFI_DEGEN", "secondary": "RUG_MAGNET" },
            weight: 2
          }
        ]
      },
      {
        id: 8,
        chapter: "CHAPTER 9",
        text: "The dev team releases a whitepaper. It’s 50 pages long and filled with buzzwords. What’s your reaction?",
        weight: 1.5,
        answers: [
          {
            text: "The fuck is this. WE DIDN'T LEARN ANYTHING SINCE PAST CYCLES??",
            archetypes: { "primary": "BUILDER", "secondary": "DAO_DIPLOMAT" },
            weight: 2
          },
          {
            text: "I’m going to screenshot the best parts and tweet em. Who needs to read the whole thing?",
            archetypes: { "primary": "SHITPOSTER", "secondary": "LARP_LORD" },
            weight: 1.5
          },
          {
            text: "I’m buying more tokens because the whitepaper says the price will moon.",
            archetypes: { "primary": "RUG_MAGNET", "secondary": "MEMECOIN_SUMMONER" },
            weight: 1
          },
          {
            text: "What if we tweak this...and that and raise money for a whole bunch of nothing new project with a different name?",
            archetypes: { "primary": "IDEA_GUY", "secondary": "LARP_LORD" },
            weight: 2
          }
        ]
      },
      {
        id: 9,
        chapter: "CHAPTER 10",
        text: "You’ve just been accepted to the biggest Web3 hackathon but don't have a team. Now what?",
        weight: 1,
        answers: [
          {
            text: "Awkward networking here I come to sacrifice my peace.",
            archetypes: { "primary": "BUILDER", "secondary": "DAO_DIPLOMAT" },
            weight: 1
          },
          {
            text: "I’m going to create a multimillion dollar company. ALONE. It’s all about marketing anyways.",
            archetypes: { "primary": "IDEA_GUY", "secondary": "EXPLORER" },
            weight: 1.5
          },
          {
            text: "I’m just here for the free swag and networking.",
            archetypes: { "primary": "AIRDROP_FOMOER", "secondary": "CT_ADDICT" },
            weight: 2
          },
          {
            text: "Replicate. Win. Repeat. Who cares about solving real world problems.",
            archetypes: { "primary": "BUILDER", "secondary": "DAO_DIPLOMAT" },
            weight: 1
          }
        ]
      },
      {
        id: 10,
        chapter: "CHAPTER 11",
        text: "BTC crossed 100k. Three new wars erupted in world. Earth is a mess. Your thoughts?",
        weight: 1.5,
        answers: [
          {
            text: "I'm buying the news.",
            archetypes: { "primary": "DEFI_DEGEN", "secondary": "ONCHAIN_MAXIMALIST" },
            weight: 2
          },
          {
            text: "I'm selling the news.",
            archetypes: { "primary": "PANIC_SELLER", "secondary": "EXPLORER" },
            weight: 1.5
          },
          {
            text: "I'm holding till my last breath.",
            archetypes: { "primary": "BAGHOLDER", "secondary": "NFT_ROMANTIC" },
            weight: 1.5
          },
          {
            text: "Chaos is an opportunity.",
            archetypes: { "primary": "AIRDROP_FOMOER", "secondary": "MEMECOIN_SUMMONER" },
            weight: 1
          }
        ]
      },
      {
        id: 11,
        chapter: "CHAPTER 12",
        text: "You’re at Token2049 Dubai. or are you?",
        weight: 1.5,
        answers: [
          {
            text: "Eats networking for breakfast and synergies for dinner",
            archetypes: { primary: "DEFI_DEGEN", secondary: "ONCHAIN_MAXIMALIST" },
            weight: 2
          },
          {
            text: "Crypto conferences suck.  My flight was canceled. Pigs fly... ",
            archetypes: { primary: "BUILDER", secondary: "PANIC_SELLER" },
            weight: 1
          },
          {
            text: "Scouting for alpha, hopping between booths for airdrop leaks.",
            archetypes: { primary: "AIRDROP_FOMOER", secondary: "EXPLORER" },
            weight: 1
          },
          {
            text: "Just here for the free swag and afterparties. Lessgourrr.",
            archetypes: { primary: "SHITPOSTER", secondary: "AIRDROP_FOMOER" },
            weight: 2
          }
        ]
      }
    ];
  
