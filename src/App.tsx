import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./components/ui/accordion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";

import { NavBarComponent } from "./components/nav-bar";

function App() {
  return (
    <>
      <div>
        <NavBarComponent></NavBarComponent>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#121212",
          height: "100vh",
          gap: '150px'
        }}
      >
        {" "}
        <h1
          style={{
            color: "white",

            fontSize: "48px",
          }}
        >
          Animals of Sri Lanka
        </h1>
        <div
          style={{
            width:'min(800px, 100%)',
            padding: '0 20px'
          }}
        >
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Elephants</AccordionTrigger>
              <AccordionContent>
                Elephants are the largest land animals, known for their
                intelligence, strong social bonds, and unique physical features,
                like their long trunks and large ears. They play a crucial role
                in ecosystems, creating water holes and spreading seeds that
                promote forest growth."
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Flying Foxes</AccordionTrigger>
              <AccordionContent>
                Flying foxes are large fruit bats known for their fox-like
                faces, expansive wingspans, and vital ecological role in
                pollinating plants and dispersing seeds. They’re often found
                roosting in large colonies in trees, mainly feeding on fruit and
                nectar.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Pythons</AccordionTrigger>
              <AccordionContent>
                Python snakes are large, non-venomous constrictors found
                primarily in Africa, Asia, and Australia. Known for their
                strength and impressive size, some species, like the reticulated
                python, can grow over 20 feet long. Pythons are skilled hunters,
                using their muscular bodies to coil around and suffocate their
                prey before swallowing it whole.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Lemurs</AccordionTrigger>
              <AccordionContent>
                Lemurs are small to medium-sized primates native to Madagascar,
                known for their large eyes, long tails, and social behavior.
                They are primarily nocturnal and live in groups called troops,
                exhibiting a range of vocalizations and behaviors. Lemurs play a
                vital role in their ecosystem as seed dispersers.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div style={{ width: "350px" }}>
          <Carousel>
            <CarouselContent>
              <CarouselItem className="flex justify-center ">
                <div className="rounded overflow-hidden shadow-lg ">
                  <img
                    src="https://cdn.britannica.com/58/146558-050-294F70A4/lemur.jpg"
                    className="h-56 object-cover"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="flex justify-center">
                <div className=" rounded overflow-hidden shadow-lg">
                  <img
                    src="https://wallpaperaccess.com/full/2145726.jpg"
                    className="h-56 object-cover"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="flex justify-center">
                <div className="rounded overflow-hidden shadow-lg">
                  <img
                    src="https://www.earthlyfacts.com/wp-content/uploads/2019/09/flying-fox.jpg"
                    className=" h-56 object-cover"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="flex justify-center">
                <div className="rounded overflow-hidden shadow-lg">
                  <img
                    src="https://www.sott.net/image/s24/485229/full/florida_python_3_gty_er_180823.jpg"
                    className="h-56 object-cover"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default App;
