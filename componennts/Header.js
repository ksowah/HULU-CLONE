import Image from "next/image";
import HeaderItem from "./HeaderItem";
import { 
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon, LightningBoltIcon, SearchIcon, UserIcon 
} from '@heroicons/react/outline'

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <div className="flex flex-grow justify-evenly max-w-2xl
                        mt-5
        ">
            <HeaderItem
                title='HOME'
                Icon={HomeIcon}
             />
            <HeaderItem
                title='TRENDING'
                Icon={LightningBoltIcon}
             />
            <HeaderItem
                title='VERIFIED'
                Icon={BadgeCheckIcon}
             />
            <HeaderItem
                title='COLLECTION'
                Icon={CollectionIcon}
             />
            <HeaderItem
                title='SEARCH'
                Icon={SearchIcon}
             />
            <HeaderItem
                title='ACCOUNT'
                Icon={UserIcon}
             />
        </div>

        <Image
        className="object-contain"
            src='https://th.bing.com/th/id/R.e3db68b142e9a711d55513803abab6e5?rik=teAnKGkfT3vxnA&pid=ImgRaw&r=0'
            width={120} height={70}
        />
    </header>
  );
}

export default Header;
