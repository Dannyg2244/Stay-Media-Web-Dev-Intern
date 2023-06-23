import {Box, VStack, HStack, Image, Text, IconButton, Select, Button} from "@chakra-ui/react"
import { faPhone, faMessage, faClock, faSearch } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

import { Switch } from "../context/Switch"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import img from "./images/twoHeadBackground.png"
import img1 from "./images/logo.png"
import { Link } from "react-router-dom"

export const Header = () => {

    const PageSelect = (e) => {
        const selectedValue = e.target.value
        window.location.href = `/${selectedValue}`
    }
    return (
        <Box
        top={0}
        left={0}
        right={0}
        as="section"
        h="25rem"
        w="100%"
        position="relative"
        >
            <Image src={img} 
            alt="my image"
            w="100%"
            h="25rem"
            position="absolute"
            />
            <Box
            top="0.5"
            w="100%"
            position="absolute"
            h="4rem"
            color="white"
            >

        <HStack
        border="1px solid white"
        borderInline="1px solid white"
        borderRight="none"
        borderLeft="none"
        pr="20"
        pl="20"
        h="2rem"
        m="auto"
        justify="space-between"
        align="center"
        >
            <nav>
            <HStack spacing="18px" 
            borderLeft="ipx solid white"
            >
            <HStack spacing="8px" ><FontAwesomeIcon mr="4px" color="rgba(245, 100, 17, 1)" icon={faPhone}  /><Text  as="p" fontStyle="normal" fontSize="sm" fontFamily="sans-serif" > (+234)8039884957 </Text></HStack>
            <HStack spacing="8px"><FontAwesomeIcon mr="4px" color="rgba(245, 100, 17, 1)" icon={faMessage}  /><Text  as="p" fontStyle="normal" fontSize="sm" fontFamily="sans-serif" > info@triber-group.com </Text></HStack>
            <HStack spacing="8px"><FontAwesomeIcon mr="4px" color="rgba(245, 100, 17, 1)" icon={faClock}  /><Text  as="p" fontStyle="normal" fontSize="sm" fontFamily="sans-serif" > Mon-Fri: 8:00 - 22:00 </Text></HStack>
            </HStack>
            </nav>
            <nav>
            <HStack spacing="18px"
            >
                        <a href="https://web.facebook.com/" rel="noOpener noReferral" target="_blank"> <FontAwesomeIcon  icon={faFacebook}/> </a>
                        <a href="https://www.instagram.com/" rel="noOpener noReferral" target="_blank"><FontAwesomeIcon  icon={faInstagram}/></a>
                        <a href="https://twitter.com/home" rel="noOpener noReferral" target="_blank"><FontAwesomeIcon  icon={faTwitter}/></a>
                        <FontAwesomeIcon icon={faSearch} />
            <IconButton
            icon={<Switch />}
            variant="ghost"
            />
            </HStack>
            </nav>
        </HStack>
        </Box>
        <Box
        top="12"
        w="100%"
        position="absolute"
        h="4rem"
        >
            <HStack
            justify="space-between"
            align="center"
            pr="20"
            pl="20"
            m="auto"
            color="white"
            >
                <nav >
                    <Image src={img1} 
                    w="200px"
                    h="60px"
                    mt="4"
                    />
                </nav>
                <nav>
                    <HStack spacing="6" color="black">
                        <Link><Text color="white" as="p" fontStyle="normal" fontSize="14" fontFamily="serif">Home</Text></Link>
                        <Link rel="noFollow" to="/"><Text color="rgba(245, 100, 17, 1)" as="p" fontStyle="normal" fontSize="14" fontFamily="serif">About</Text></Link>
                        <Link>
                        <Select onSelect={PageSelect} placeholder="Our Business" color="black" border="none"  fontStyle="normal" fontSize="sm" fontFamily="serif">
                            <option value="/oil_trading">Oil Trading</option>
                            <option value="shipping">  Shipping</option>
                            <option value="procurement">Procurement</option>
                            <option value="soft_commodity">Soft Commodity</option>
                        </Select>
                        </Link>
                        <Link rel="noFollow" to="/new-event"><Text color="white" as="p" fontStyle="normal" fontSize="14" fontFamily="serif">News & Events</Text></Link>
                        <Link rel="noFollow" to="/career"><Text color="white" as="p" fontStyle="normal" fontSize="14" fontFamily="serif">Career</Text></Link>
                        <Link rel="noFollow" to="/contact"><Text color="white" as="p" fontStyle="normal" fontSize="14" fontFamily="serif">Contact</Text></Link>
                    </HStack>
                </nav>
                <nav>
                    <Link rel="noFollow" to="/signup"><Button background="#F56411" _hover="black" border="none">Get Started</Button></Link>
                </nav>
            </HStack>
        </Box>
        <Box top="40" position="absolute" color="white" w="100%" >
            <VStack  justify="center" align="center">
                <Text as="h1" fontSize="36" fontFamily="sans-serif"> About Us</Text>
                <Box borderBottom="2px solid white" w="40px" mt="4" mb="4" />
            </VStack>
        </Box>
        </Box>
    )
}