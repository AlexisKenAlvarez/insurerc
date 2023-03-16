import { BsFillCreditCardFill } from 'react-icons/bs'
import { MdConnectWithoutContact, MdRocketLaunch } from 'react-icons/md'
import { GiStoneBridge } from 'react-icons/gi'

export const featureList = [
    {
        icon:
            <>
                <img src="ens.png" alt="ENS" className="mx-auto block w-10" />
            </>,
        title: "ENS",
        desc: "We are the first ENS on the Shibarium network. It is a decentralized domain name system that simplifies and secures interactions by allowing users to associate human-readable domain names with Ethereum addresses and network resources."
    },
    {
        icon:
            <>
                <MdConnectWithoutContact className='text-center mx-auto text-4xl' />
            </>,
        title: "Contract Deployer",
        desc: "Deployer can be used to deploy the smart contract code of your token on on the most popular blockchain network without much knowledge, enabling users to interact with and transfer your token on the network."
    },
    {
        icon:
            <>
                <GiStoneBridge className='text-center mx-auto text-4xl' />
            </>,
        title: "Bridge",
        desc: "A bridge from Ethereum to the Shibarium Chain would allow users to transfer assets between the two networks by utilizing a smart contract to hold and manage the assets being transferred."
    },
    {
        icon:
            <>
                <MdRocketLaunch className='text-center mx-auto text-4xl' />
            </>,
        title: "Launchpad",
        desc: "Built by us developers to help other Developers raise funds and launch their tokens through a streamlined and secure process."
    },
    {
        icon:
            <>
                <BsFillCreditCardFill className='text-center mx-auto text-4xl' />
            </>,
        title: "Locker",
        desc: "Projects will be able to lock their liquidity tokens or even to just create vestings."
    },


]