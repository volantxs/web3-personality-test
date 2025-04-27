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
            text: "Gotta audit this contract first. Security first, vibes second.",
            archetypes: { "primary": "BUILDER", "secondary": "ONCHAIN_MAXIMALIST" },
            weight: 2
          },
          {
            text: "Mint 10 and drop a meme about how I'm early.",
            archetypes: { "primary": "MEMECOIN_SUMMONER", "secondary": "DEFI_DEGEN" },
            weight: 1.5
          },
          {
            text: "Yo, I'm gonna just ape in and pray. Let's gooooo.",
            archetypes: { "primary": "DEFI_DEGEN", "secondary": "RUG_MAGNET" },
            weight: 1
          },
          {
            text: "Is there an airdrop for this? I'm not minting unless I get free stuff.",
            archetypes: { "primary": "AIRDROP_FOMOER", "secondary": "EXPLORER" },
            weight: 1
          }
        ]
      },
      {
        id: 1,
        chapter: "CHAPTER 2",
        text: "The DAO votes are in. Half want to go full memecoin. The other half wants to actually build something. You're in the middle of this beautiful mess.",
        weight: 1.5,
        answers: [
          {
            text: "I'm writing a 12-page proposal to fix everything. You guys just don't get it.",
            archetypes: { "primary": "DAO_DIPLOMAT", "secondary": "BUILDER" },
            weight: 2
          },
          {
            text: "I'm going to screenshot this chaos and make it my Twitter header.",
            archetypes: { "primary": "LARP_LORD", "secondary": "CT_ADDICT" },
            weight: 1.5
          },
          {
            text: "I'm selling my DAO tokens. Too much drama. I'm out.",
            archetypes: { "primary": "PANIC_SELLER", "secondary": "EXPLORER" },
            weight: 1
          },
          {
            text: "Forget it, I'm launching my own DAO called $DEGEN. Vote now!",
            archetypes: { "primary": "IDEA_GUY", "secondary": "DEFI_DEGEN" },
            weight: 1.5
          }
        ]
      },
      {
        id: 2,
        chapter: "CHAPTER 3",
        text: "Your favorite NFT collection just plummeted 80%. Everyone's freaking out. You’ve got 3 of these overpriced JPEGs. What do you do?",
        weight: 1.5,
        answers: [
          {
            text: "Buy the dip. Art is forever. And so is my empty wallet.",
            archetypes: { "primary": "NFT_ROMANTIC", "secondary": "MEMECOIN_SUMMONER" },
            weight: 2
          },
          {
            text: "Sell 2 of them for 0.01 ETH and pray the other one moons.",
            archetypes: { "primary": "DEFI_DEGEN", "secondary": "BAGHOLDER" },
            weight: 1.5
          },
          {
            text: "Time to launch my own NFT collection. No utility, just vibes.",
            archetypes: { "primary": "BUILDER", "secondary": "RUG_MAGNET" },
            weight: 1.5
          },
          {
            text: "I’m cutting losses. Let’s get out of here before it gets worse.",
            archetypes: { "primary": "PANIC_SELLER", "secondary": "BAGHOLDER" },
            weight: 1
          }
        ]
      },
      {
        id: 3,
        chapter: "CHAPTER 4",
        text: "You clicked a link. It was an unbelievable opportunity. And now your wallet is empty. Classic. What’s your reaction?",
        weight: 1.5,
        answers: [
          {
            text: "Oh well, another rug. This is part of the game.",
            archetypes: { "primary": "RUG_MAGNET", "secondary": "BAGHOLDER" },
            weight: 1.5
          },
          {
            text: "Time to tweet: 'Just got rugged. Anyone else? #CryptoProblems'",
            archetypes: { "primary": "SHITPOSTER", "secondary": "MEMECOIN_SUMMONER" },
            weight: 1.5
          },
          {
            text: "I’m on Etherscan tracking these devs. They can't hide forever.",
            archetypes: { "primary": "BUILDER", "secondary": "ONCHAIN_MAXIMALIST" },
            weight: 2
          },
          {
            text: "Airdrop season’s here. Let’s go get some rewards for my pain.",
            archetypes: { "primary": "AIRDROP_FOMOER", "secondary": "EXPLORER" },
            weight: 1
          }
        ]
      },
      {
        id: 4,
        chapter: "CHAPTER 5",
        text: "$TOKENX is up 50x. Again. And you missed it. How do you feel?",
        weight: 1.5,
        answers: [
          {
            text: "Well, time to ape into the next one. It’s all about catching the next wave.",
            archetypes: { "primary": "LAUNCHPAD_HOPPER", "secondary": "DEFI_DEGEN" },
            weight: 2
          },
          {
            text: "I’m buying the top and posting ‘called it.’ Who cares about timing?",
            archetypes: { "primary": "BAGHOLDER", "secondary": "DEFI_DEGEN" },
            weight: 1.5
          },
          {
            text: "I’m posting a meme about how the market’s just a casino.",
            archetypes: { "primary": "SHITPOSTER", "secondary": "MEMECOIN_SUMMONER" },
            weight: 1.5
          },
          {
            text: "I’ll just wait for the next airdrop. I’m here for the free stuff.",
            archetypes: { "primary": "AIRDROP_FOMOER", "secondary": "EXPLORER" },
            weight: 1
          }
        ]
      },
      {
        id: 5,
        chapter: "CHAPTER 6",
        text: "A prominent VC tweets, “Crypto is dying. Again.” The timeline is in flames. What’s your move?",
        weight: 1.5,
        answers: [
          {
            text: "I’m drafting 15 threads explaining why he’s wrong. He’s just not looking deep enough.",
            archetypes: { "primary": "ONCHAIN_MAXIMALIST", "secondary": "DAO_DIPLOMAT" },
            weight: 2
          },
          {
            text: "Reply with 'cope' and get 100 retweets. Let’s go viral.",
            archetypes: { "primary": "SHITPOSTER", "secondary": "CT_ADDICT" },
            weight: 1.5
          },
          {
            text: "I’m agreeing with him just to get that sweet sweet job offer.",
            archetypes: { "primary": "LARP_LORD", "secondary": "DEFI_DEGEN" },
            weight: 1.5
          },
          {
            text: "I’m unfollowing everyone except for the Dogecoin people. Real degens only.",
            archetypes: { "primary": "DEFI_DEGEN", "secondary": "MEMECOIN_SUMMONER" },
            weight: 1
          }
        ]
      },
      {
        id: 6,
        chapter: "CHAPTER 7",
        text: "Minting is live, but gas is 300 Gwei. Time is running out. You need to act now.",
        weight: 1.5,
        answers: [
          {
            text: "Arbitrum is the answer. Low fees, high rewards.",
            archetypes: { "primary": "ONCHAIN_MAXIMALIST", "secondary": "DEFI_DEGEN" },
            weight: 2
          },
          {
            text: "Screw it. I’ll pay the 0.2 ETH gas. This is how legends are made.",
            archetypes: { "primary": "DEFI_DEGEN", "secondary": "BAGHOLDER" },
            weight: 1.5
          },
          {
            text: "Let’s fork the contract and mint my own version. Who needs gas anyway?",
            archetypes: { "primary": "BUILDER", "secondary": "RUG_MAGNET" },
            weight: 1.5
          },
          {
            text: "Wait…is there an airdrop for this gas war? I’m here for that free money.",
            archetypes: { "primary": "AIRDROP_FOMOER", "secondary": "EXPLORER" },
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
            text: "It’s like your company, but without the middlemen... or the trust.",
            archetypes: { "primary": "DAO_DIPLOMAT", "secondary": "BUILDER" },
            weight: 1.5
          },
          {
            text: "It’s like Facebook, but for people who actually want privacy.",
            archetypes: { "primary": "ONCHAIN_MAXIMALIST", "secondary": "LARP_LORD" },
            weight: 1.5
          },
          {
            text: "It’s like your company, but it’s all controlled by the community... good luck with that.",
            archetypes: { "primary": "SHITPOSTER", "secondary": "CT_ADDICT" },
            weight: 1
          },
          {
            text: "It’s like the stock market, but with way more potential for rug pulls.",
            archetypes: { "primary": "DEFI_DEGEN", "secondary": "RUG_MAGNET" },
            weight: 1.5
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
            text: "I’m reading this cover to cover. I love these blockchain buzzwords.",
            archetypes: { "primary": "BUILDER", "secondary": "ONCHAIN_MAXIMALIST" },
            weight: 2
          },
          {
            text: "I’m going to screenshot the best parts and tweet them out. Who needs to read the whole thing?",
            archetypes: { "primary": "SHITPOSTER", "secondary": "CT_ADDICT" },
            weight: 1.5
          },
          {
            text: "I’m buying more tokens because the whitepaper says the price will moon.",
            archetypes: { "primary": "DEFI_DEGEN", "secondary": "BAGHOLDER" },
            weight: 1.5
          },
          {
            text: "I’m getting ready to launch my own token with a better whitepaper.",
            archetypes: { "primary": "IDEA_GUY", "secondary": "RUG_MAGNET" },
            weight: 1
          }
        ]
      },
      {
        id: 9,
        chapter: "CHAPTER 10",
        text: "You’ve just been accepted to the biggest Web3 hackathon in history. What’s your next step?",
        weight: 1.5,
        answers: [
          {
            text: "I’m going to build a decentralized Twitter with no censorship.",
            archetypes: { "primary": "BUILDER", "secondary": "DAO_DIPLOMAT" },
            weight: 2
          },
          {
            text: "I’m going to create a memecoin with utility. It’s all about marketing.",
            archetypes: { "primary": "MEMECOIN_SUMMONER", "secondary": "LAUNCHPAD_HOPPER" },
            weight: 1.5
          },
          {
            text: "I’m just here for the free swag and networking.",
            archetypes: { "primary": "CT_ADDICT", "secondary": "EXPLORER" },
            weight: 1.5
          },
          {
            text: "I’m launching my own DAO with a token to fund the hackathon.",
            archetypes: { "primary": "DAO_DIPLOMAT", "secondary": "BUILDER" },
            weight: 1.5
          }
        ]
      },
      {
        id: 10,
        chapter: "CHAPTER 11",
        text: "The price of $DOGE is going insane. It’s 10x’ing. Your thoughts?",
        weight: 1.5,
        answers: [
          {
            text: "I'm buying more.",
            archetypes: { "primary": "BAGHOLDER", "secondary": "DEFI_DEGEN" },
            weight: 2
          },
          {
            text: "I'm selling.",
            archetypes: { "primary": "PANIC_SELLER", "secondary": "BAGHOLDER" },
            weight: 1.5
          },
          {
            text: "I'm holding.",
            archetypes: { "primary": "BAGHOLDER", "secondary": "DEFI_DEGEN" },
            weight: 1.5
          },
          {
            text: "I'm hedging.",
            archetypes: { "primary": "BAGHOLDER", "secondary": "DEFI_DEGEN" },
            weight: 1
          }
        ]
      }
    ];
  
