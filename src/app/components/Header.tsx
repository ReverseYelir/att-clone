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
        <div className="lg:flex lg:gap-4 lg:items-center hidden">
          <div className="flex items-center">
            <a>
              <CompanyLogo />
            </a>
            <div className="h-6 w-[2px] bg-black mr-3 rounded-lg"></div>
            <a>
              <MenuIcon />
            </a>
          </div>
          <a className="link-hover">Deals</a>
          <a className="link-hover">Wireless</a>
          <a className="link-hover">Internet</a>
          <a className="link-hover">Accessories</a>
          <a className="link-hover">TV</a>
          <a className="link-hover">Prepaid</a>
          <a className="link-hover">Business</a>
        </div>
        <a className="lg:hidden sm:visible">
          <MenuIcon />
        </a>
        <div className="flex gap-4 items-center">
          <form className="flex items-center border-slate-300 rounded-md border-solid border-2 px-4 p-1 w-80">
            <input
              type="text"
              placeholder="I'm looking for..."
              className="w-full"
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
            <a className="link-hover">Support</a>
            <div className="h-6 w-[2px] bg-black mx-3 rounded-lg"></div>
            <a className="link-hover">My AT&T</a>
          </div>
        </div>
      </div>
    </div>
  );
}
