import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const fleets = [
  {
    name: "Sedan",
    capacity: "4 + Driver",
    lugguage: "2 Big + 2 Small",
    musicPlayer: "Yes",
    ac: "Yes",
    url: "https://static.autox.com/uploads/2021/03/2021-Mercedes-Benz-E-Class-design2.jpg",
  },
  {
    name: "Toyota Innova Crysta XUV",
    capacity: "6 + Driver",
    lugguage: "2 Big + 2 Small",
    musicPlayer: "Yes",
    ac: "Yes",
    url: "https://stat.overdrive.in/wp-content/odgallery/2020/11/58040_2021_Toyota_innova_crysta_1_468x263.jpg",
  },
  {
    name: "Tempo traveller",
    capacity: "17/20/26 + Driver",
    lugguage: "2 Big + 2 Small",
    musicPlayer: "Yes",
    ac: "Yes",
    url: "https://busimg.cardekho.com/p/630x420/in/force/traveller-3350-super/force-traveller-3350-super.jpg?imwidth=480&impolicy=resize",
  },
  {
    name: "Van",
    capacity: "17 + Driver",
    lugguage: "2 Big + 2 Small",
    musicPlayer: "Yes",
    ac: "Yes",
    url: "https://wallpapercave.com/wp/wp7542943.jpg",
  },
];

export default function Fleet() {
  return (
    <div className="bg-bg-grey">
      <div className="w-11/12 sm:w-11/12 mx-auto py-10 sm:py-20 ">
        <h1 className="text-center text-xl font-bold sm:text-5xl sm:tracking-wider	 text-base-color mb-5 sm:mb-10  ">
          <span className="text-vivid-orange"> Our</span> Fleets
        </h1>
        <div className=" grid grid-cols-1 sm:grid-cols-4    gap-y-8 gap-x-8">
          {fleets.map((fleet) => (
            <Card
              sx={{ maxWidth: 400 }}
              key={fleet.name}
              className="border-[1px] border-vivid-orange"
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  // height="120"
                  image={fleet.url}
                  alt={fleet.name}
                  className="h-[250px]  p-3 rounded-2xl "
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="text-vivid-orange"
                  >
                    {fleet.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <span>
                      <span className=" font-semibold sm:text-md">
                        Capacity:{" "}
                      </span>
                      {fleet.capacity}
                    </span>{" "}
                    <br />
                    <span>
                      <span className=" font-semibold sm:text-md">
                        Lugguage:{" "}
                      </span>
                      {fleet.lugguage}
                    </span>
                    <br />
                    <span>
                      <span className=" font-semibold sm:text-md">
                        Music Player:{" "}
                      </span>
                      {fleet.musicPlayer}
                    </span>
                    <br />
                    <span>
                      <span className=" font-semibold sm:text-md">AC: </span>
                      {fleet.ac}
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
