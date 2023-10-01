import MenuIcon from "./icons/MenuIcon";
import SearchIcon from "./icons/SearchIcon";
import ShoppingCartIcon from "./icons/ShoppingCartIcon";
import CompanyLogo from "./icons/company-logo";
/*
Deals
Wireless
Internet
Accessories
TV
Prepaid
Business
*/
export default function Header() {
  return (
    <div className="flex-col container m-auto">
      <div className="flex gap-4 justify-end">
        <a>Find a store</a>
        <a>Ver en espa&ntilde;ol</a>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <div className="flex items-center">
            <a>
              <CompanyLogo />
            </a>
            <div className="h-6 w-[2px] bg-black mr-3 rounded-lg"></div>
            <a>
              <MenuIcon />
            </a>
          </div>
          <a>Deals</a>
          <a>Wireless</a>
          <a>Internet</a>
          <a>Accessories</a>
          <a>TV</a>
          <a>Prepaid</a>
          <a>Business</a>
        </div>
        <div className="flex gap-4 items-center">
          <form className="flex items-center border-slate-300 rounded-md border-solid border-2 px-4 p-1">
            <input
              type="text"
              placeholder="I'm looking for..."
              className="w-80"
            />
            <button className="text-slate-500">
              <SearchIcon />
            </button>
          </form>

          <div className="flex items-center">
            <button>
              <ShoppingCartIcon />
            </button>
            <div className="h-6 w-[2px] bg-black mx-3 rounded-lg"></div>
            <a>Support</a>
            <div className="h-6 w-[2px] bg-black mx-3 rounded-lg"></div>
            <a>My AT&T</a>
          </div>
        </div>
      </div>
    </div>
  );
}
