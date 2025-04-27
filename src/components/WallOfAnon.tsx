import { useState, useEffect } from "react"
import { Card, CardContent } from '../components/ui/card';


const characterImages = [
  "AIRDROP_FOMOER.jpg",
  "BAGHOLDER.jpg",
  "BUILDER.jpg",
  "CT_ADDICT.jpg",
  "DAO_DIPLOMAT.jpg",
  "DEFI_DEGEN.jpg",
  "EXPLORER.jpg",
  "IDEA_GUY.jpg",
  "LARP_LORD.jpg",
  "LAUNCHPAD_HOPPER.jpg",
  "MEMECOIN_SUMMONER.jpg",
  "NFT_ROMANTIC.jpg",
  "ONCHAIN_MAXIMALIST.jpg",
  "PANIC_SELLER.jpg",
  "RUG_MAGNET.jpg",
  "SHITPOSTER.jpg"
];


const WallOfAnon: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [copied, setCopied] = useState(false);
    const [popupMessage, setPopupMessage] = useState(
      "Now that you have took so much interest in my test, wanna talk business too while we are at it? (m an opportunist lmao)"
    );
    const [showButtons, setShowButtons] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => setShowPopup(true), 3000);
      return () => clearTimeout(timer);
    }, []);
  
    const handleBusiness = () => {
        window.open(
          "https://t.me/volantxs?text=slipping%20in%20your%20DMs%20from%20web3%20type%20test%2C%20lets%20talk%20business%20;)",
          "_blank"
        );
      };
      
      const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500); // Reset after 1.5s
      };
    const handleFunny = () => {
      setPopupMessage("So they say... go on, share the test with your frens!");

      setShowButtons(false);
    };
  
    const handleClose = () => setShowPopup(false);
    
    return (
  <div className="p-8">
    <h1 className="text-center sm:text-3xl md:text-3xl mb-8">Wall of Anon</h1>
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "2rem",
      maxHeight: "100vh", 
      overflowY: "auto",
      paddingRight: "1rem",
      paddingBottom: "8rem "
    }}>
      {characterImages.map((img) => (
        <div key={img} style={{ textAlign: "center" }}>
          <img
            src={`/images/${img}`}
            alt={img.replace(".jpg", "").replace(/_/g, " ")}
            className="m-auto sm:max-w-auto md:max-w-auto rounded-lg g-[#a8ff94] text-[#181818] rounded-lg shadow-lg"
          />
        </div>
      ))}
    </div>
    {showPopup && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 bg-black ">
    <div className="relative">
      <Card className="w-[90vw] max-w-lg mx-auto animate-fade-in bg-white">
        <CardContent className="pt-6 pb-6 flex flex-col items-center">
          <button
            className="absolute top-2 right-3 text-gray-400 text-2xl hover:text-black"
            onClick={handleClose}
            aria-label="Close"
          >
            ×
          </button>
          <p className="text-xl text-center mb-6 sm:text-2xl md:text-2xl">{popupMessage}</p>
          {popupMessage === "So they say... go on, share the test with your frens!" && (
        <button
          className=" px-4 py-2 rounded sm:text-lg md:text-xl bg-[#a6f894] text-[#000000] hover:bg-[#000000] hover:text-[#ffffff] transition-all"
          onClick={handleCopyLink}
        >
          {copied ? "Copied!" : "Copy link"}
        </button>
      )}
          {showButtons && (
            <div className="flex gap-4 mt-2">
              <button
                className="px-6 py-2 rounded bg-[#a6f894] text-[#000000] hover:bg-[#000000] hover:text-[#ffffff] transition-all"
                onClick={handleBusiness}
              >
                Coffee on you {';)'}
              </button>
              <button
                className="px-6 py-2 rounded bg-[#a6f894] text-[#000000] hover:bg-[#000000] hover:text-[#ffffff] transition-all"
                onClick={handleFunny}
              >
                You're funny XD
              </button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  </div>
)}
  </div>    
)};
export default WallOfAnon;