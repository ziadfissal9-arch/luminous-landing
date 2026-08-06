import {
  Send,
  ShoppingBag,
  Smartphone,
  Zap,
  PiggyBank,
} from "lucide-react";

// A pure-CSS finance-app phone mockup used inside the hero visual card.
export default function PhoneMockup() {
  return (
    <div className="phone">
      <div className="phone-notch" />
      <div className="phone-screen">
        <div className="phone-top">
          <span>9:41</span>
          <span>Statistics</span>
        </div>

        <div className="phone-welcome">Welcome Back 👋</div>
        <div className="phone-balance">$9,014.00</div>

        <div className="phone-cardbox">
          <div className="pc-label">Current Balance</div>
          <div className="pc-num">4863 •••• •••• 2841</div>
        </div>

        <div className="phone-services">
          <div className="phone-serv">
            <Send size={16} />
          </div>
          <div className="phone-serv">
            <ShoppingBag size={16} />
          </div>
          <div className="phone-serv">
            <Smartphone size={16} />
          </div>
          <div className="phone-serv">
            <Zap size={16} />
          </div>
        </div>

        <div className="phone-row">
          <span>Shopping</span>
          <b>-$240</b>
        </div>
        <div className="phone-row">
          <span>Top up</span>
          <b>+$980</b>
        </div>
      </div>
    </div>
  );
}
