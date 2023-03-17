import { BsFillCreditCardFill } from 'react-icons/bs'
import { MdConnectWithoutContact, MdRocketLaunch } from 'react-icons/md'
import { GiStoneBridge } from 'react-icons/gi'
import { TbBuildingBridge } from 'react-icons/tb'
export const featureList = [
    {
        icon:
            <>
                <img src="ens.png" alt="ENS" className="mx-auto block w-10 toBrown" />
            </>,
        title: "ENS",
        desc: "We are the first ENS on the Shibarium network. It is a decentralized domain name system that simplifies and secures interactions by allowing users to associate human-readable domain names with Ethereum addresses and network resources.",
        img: 'ens'
    },
    {
        icon:
            <>
                <MdConnectWithoutContact className='text-center mx-auto text-4xl' />
            </>,
        title: "Contract Deployer",
        desc:
            <>
                <p className="">Deployer can be used to deploy the smart contract code of your token on on the most popular blockchain network without much knowledge, enabling users to interact with and transfer your token on the network.</p>

                <p className="">
                    In the context of cryptocurrencies, a contract deployer refers to a person or entity that deploys a smart contract on a blockchain network. A smart contract is a self-executing contract with the terms of the agreement directly written into code, which is stored on the blockchain.
                </p>

                <p className="">
                    The contract deployer is responsible for initiating the smart contract by deploying it on the blockchain network. The deployer specifies the terms and conditions of the contract, including the actions that will be performed automatically by the smart contract when certain conditions are met.
                </p>

                <p className="">
                    Once the smart contract is deployed, it can execute automatically without the need for any human intervention, and its actions are irreversible. This makes smart contracts an efficient and secure way to conduct transactions and enforce agreements on a blockchain network.
                </p>

            </>,

        img: 'contract'
    },
    {
        icon:
            <>
                <TbBuildingBridge className='text-center mx-auto text-4xl' />
            </>,
        title: "Bridge",
        desc:
            <>
                <p className="">
                    In the world of cryptocurrency, a bridge utility is a tool or platform that enables the transfer of digital assets between different blockchain networks or protocols.
                </p>

                <p className="">
                    Cryptocurrencies operate on their own blockchain networks, each with its unique set of rules and protocols. As a result, it can be challenging to move assets from one network to another, and this is where a bridge utility comes in.
                </p>

                <p className="">
                    A bridge utility is essentially a system that connects two different blockchain networks, allowing the transfer of digital assets between them. It acts as a bridge between the two networks, providing a secure and transparent way to move assets from one network to another.
                </p>

                <p className="">
                    Bridge utilities can be used for a variety of purposes, such as moving tokens from one blockchain network to another for trading or liquidity purposes, accessing decentralized applications &#40;DApps&#41; on different networks, or simply for diversifying one's digital asset portfolio across different networks.
                </p>

                <p className="">
                    There are several types of bridge utilities in the crypto space, including decentralized exchanges 	&#40;DEXs&#41;, wrapped tokens, cross-chain bridges, and interoperability platforms. Each type of bridge utility has its own unique features and benefits, but they all serve the same purpose of enabling the transfer of digital assets between different blockchain networks.
                </p>

            </>,
        img: 'bridge'
    },
    {
        icon:
            <>
                <MdRocketLaunch className='text-center mx-auto text-4xl' />
            </>,
        title: "Launchpad",
        desc:
            <>
                <p className="">
                    Built by us developers to help other Developers raise funds and launch their tokens through a streamlined and secure process.
                </p>

                <p className="">
                    In the context of cryptocurrency, a launchpad is a platform that helps new crypto projects to launch their initial coin offerings &#40;ICO&#41; or initial exchange offerings &#40;IEO&#41;. These platforms provide a range of services, such as technical support, marketing, and fundraising, to help the new project raise capital and gain exposure.
                </p>

                <p>
                    Launchpads are typically run by established cryptocurrency exchanges, such as Binance and Huobi, or by specialized companies such as DuckDAO, DAO Maker, and Polkastarter. They offer a variety of services, including token sales, token swaps, and liquidity mining.
                </p>

                <p className="">
                    Launchpads have become popular in the crypto space because they provide a streamlined and secure way for investors to participate in new projects. They also help new projects to gain exposure and build their communities.
                </p>

                <p className="">
                    However, investing in new projects through a launchpad carries significant risks, including the potential for scams or failed projects. Therefore, investors should always do their due diligence before investing in any cryptocurrency project, and seek advice from reputable sources.
                </p>

            </>,
        img: 'launchpad'
    },
    {
        icon:
            <>
                <BsFillCreditCardFill className='text-center mx-auto text-4xl' />
            </>,
        title: "Locker",
        desc:
            <>
                <p className="">
                    Projects will be able to lock their liquidity tokens or even to just create vestings.
                </p>

                <p className="">
                    In the context of cryptocurrency, a locker &#40;also known as a "crypto locker" or "crypto escrow"&#41; is a type of smart contract that holds a certain amount of cryptocurrency and releases it based on certain conditions being met.
                </p>

                <p className="">
                    For example, a locker could be set up to hold a certain amount of cryptocurrency until a certain date, or until certain conditions are met. This can be useful in a variety of situations, such as for escrow services in a cryptocurrency transaction or for managing the distribution of funds in a decentralized organization.
                </p>

                <p className="">
                    Lockers are typically implemented as smart contracts on blockchain platforms such as Ethereum, and can be customized with a variety of conditions and rules for releasing funds. The use of lockers can help to increase transparency and trust in cryptocurrency transactions, as the terms of the contract are stored on the blockchain and can be verified by anyone.
                </p>



            </>,
        img: 'locker'
    },


]