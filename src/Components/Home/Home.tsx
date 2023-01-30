import { useState, useEffect } from "react";
import { SimpleGrid, GridItem} from "@chakra-ui/react";
import LeftHome from "./LeftHome";
import RightHome from "./RightHome";
function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
export default function Home() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    
    return (
      <section id="home">
        <SimpleGrid
            columns={[2]}
            columnGap={2}
            height={['auto','auto', 'auto', '100vh']}
            rowGap={[5]}
            py={5}
    
        >
            <GridItem colSpan={[2, 2, 1]} order={windowDimensions.width<=860?1:0}  data-aos="zoom-in-up" >
                <LeftHome  />
            </GridItem>
            <GridItem colSpan={[2, 2, 1]}  data-aos="zoom-in-up"  >
                <RightHome/>
            </GridItem>

        </SimpleGrid>
      </section>

    )
}
