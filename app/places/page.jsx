const places = [
  {
    title: "Bibi Ka Maqbara",
    desc: "If you think the Taj Mahal is the only royal monument built for a beloved wife, a trip to Bibi Ka Maqbara will alter that notion. Constructed in 1661 by Emperor Aurangzeb to commemorate his wife Rabia-Ul-Daurani (also known as Dilras Banu Begum), who died in 1657, this mesmerizing tomb is truly remarkable.Frequently called the Taj of the Deccan, Bibi Ka Maqbara closely resembles its Agra counterpart. Nestled against a backdrop of grand mountains, this marble tomb features detailed carvings and stands out as one of the most stunning landmarks in the city. Open daily from 8 AM to 8 PM, it remains a beloved tourist attraction in Aurangabad.",
    imgSrc:
      "https://a-square-hotel.vercel.app/images/places/bibi-ka-maqbara.jpg",
  },
  {
    title: "Daulatabad Fort",
    desc: "First established by Yadava King Bhillama in 1187, Daulatabad Fort has undergone numerous modifications and improvements under several rulers, including the Mughals and the Ahmednagar Sultanate. Known also as Deogiri Fort, this impressive stronghold sits atop a hill in the village of Daulatabad. Renowned for its robust defense systems, Daulatabad Fort featured impregnable fortifications such as fortified walls, large gates with iron spikes, pathways, moats, bulwarks, and watchtowers, creating an unbeatable barrier.Built on a conical granite hill, the fort demonstrates precise urban planning, water management systems, architectural wonders, and military tactics. Prominent features of the fort include Saraswati Bawdi, Bharat Mata Mandir, Rang Mahal, Chand Minar, Chinni Mahal, and Baradari.",
    imgSrc:
      "https://a-square-hotel.vercel.app/images/places/devagiri-daulatabad-fort.jpg",
  },
  {
    title: "Ajanta Caves",
    desc: "Carved into the cliffs, 30 Ajanta Caves whisper tales of Buddhism's past. Housing both Hinayana and Mahayana traditions, each cave, from prayer halls to residences, has a unique purpose. Sculptural splendor and vibrant murals grace the walls, capturing ancient stories in a timeless embrace. A UNESCO World Heritage Site since 1983, Ajanta boasts 24 Buddhist caves and 5 Hindu cave temples. Caves 1, 2, 4, 16, 17, and 26 are especially dazzling, with Cave 26 featuring a mesmerizing reclining Buddha. Dedicate a day (closed Mondays) to explore these wonders, open from 9 AM to 5 PM.",
    imgSrc: "https://a-square-hotel.vercel.app/images/places/ajanta-caves.jpg",
  },
  {
    title: "Ellora Caves",
    desc: "The Ellora Caves, also recognized as a UNESCO World Heritage site, have their beginnings in the 6th century. Spread across more than 2 kilometers in the Charanandri hills, these 34 rock-cut caves, known too as Verul Caves, provide a captivating look at India's ancient civilizations from A.D. 600 to 1000. Famous for their stunning paintings, detailed carvings, and sculptures, the Ellora Caves display exceptional artistry that amazes all who visit. Demonstrating the variety of Indian culture, these caves are associated with three different religions: Buddhism, Hinduism, and Jainism.Caves 1 through 12 reflect the Mahayana Buddhist philosophy and were excavated from the 5th to the 8th centuries. Representing Hindu beliefs, Caves 13 through 29 were sculpted from the 7th to the 10th century, with Cave 16 containing the esteemed Kailasa temple. Finally, Caves 30 to 34 provide insights into the Jain religion.",
    imgSrc: "https://a-square-hotel.vercel.app/images/places/ellora-caves.jpg",
  },
  {
    title: "Panchakki",
    desc: "Panchakki might not top the usual list of tourist spots, yet it presents a fascinating look at historical innovation. Built in 1695 by Turktaz Khan, a nobleman in the service of Nizam-ul-Mulk Asaf Jah, this water mill complex highlights the scientific brilliance of early India.Panchakki's main role was to utilize water from a mountainous reservoir, demonstrating initial advances in water engineering. The complex also includes a madrasa, a minister's house, Sarai (inn), zananas (women's quarters), and a mosque. Additionally, visitors can access a library containing over 2500 books in several languages, such as Persian and Arabic. While it might be atypical, Panchakki offers a compelling mix of historical importance and architectural wonder, marking it as an important destination for those interested in India's vast cultural legacy.",
    imgSrc: "https://a-square-hotel.vercel.app/images/places/panchakki.jpg",
  },
  {
    title: "Chhatrapati Shivaji Museum",
    desc: "The Chhatrapati Shivaji Museum serves as a homage to the glorious heritage of the Maratha rulers, especially Chhatrapati Shivaji Maharaj. Featuring six galleries, the museum provides an extensive look at Shivaji’s contributions and life story. Inside its galleries, visitors can explore a varied collection of displays, including photographs, ancient armaments such as swords, shields, and rifles, as well as a notable 500-year-old war suit. The museum also showcases a range of coins, relics like a 400-year-old Paithani sari, and even a handwritten Quran previously owned by Emperor Aurangzeb.    Ideally located near additional points of interest like Himayat Bagh and Salim Ali Sarovar, the museum is just 5 km from the Aurangabad railway station. It invites guests from 10:30 AM to 5 PM, offering a deep dive into the rich history of the Maratha empire.",
    imgSrc:
      "https://a-square-hotel.vercel.app/images/places/chhatrapati-shivaji-maharaj-museum.jpg",
  },
  {
    title: "Shirdi sai baba ",
    desc: "Dwarkamai Mandir, where Baba lived, with a temple inside, is the only one of its kind and importance in India. Another interesting aspect of the dwarkamai mandir is that the Dhuni, or holy fire that Sai Baba lit here has been always kept burning to this day. There is a Gurusthan under the Neem tree where, according to Baba, the original samadhi of his own guru is located and Where Baba was found during his Balyog or Yuva avastha.This place is considered to be a very important because of this reason.",
    imgSrc:
      "https://www.savaari.com/blog/wp-content/uploads/2021/02/shirdi-sai-temple.jpg",
  },
  {
    title: "Trimbkeshavar",
    desc: "The temple is located between three hills namely Brahmagiri, Nilagiri and Kalagiri. The temple has three lingas (an iconic form of Shiva) representing Shiva, Vishnu and Brahma. The temple tank is called Amritavarshini, which measured 28 m (92 ft) by 30 m (98 ft). There are three other bodies of water, namely, Bilvatirtha, Viswanantirtha and Mukundatirtha. There are images of various deities, namely, Ganga, Jaleswara, Rameswara, Gautameswara, Kedarnatha, Rama, Krishna, Parashurama and Lakshmi Narayana. The temple also has several monasteries and samadhis of saints.",
    imgSrc:
      "https://www.seawatersports.com/img/newimage/places/trimbakeshwar-inmaharashtra.jpg",
  },
  {
    title: "Bhimashankar",
    desc: "The temple is built in the Nagrara style, which combines traditional and modern designs. The temple hall was constructed during the 18th century by Nāna Phadnavis of Peshwa.[6] The Gopura-shikhara of the temple was built by Nāna Phadnavis. The village of Kharosi was granted to the temple by King Shivaji. The daily religious observance was funded through the financial resources which derived from the people of the area.Bhimashankaram shrine and the Bhimarathi river have been talked about in writings as far back as the 13th century.",
    imgSrc:
      "https://templeyatri.in/wp-content/uploads/2024/02/bhimashankar-temple-maharashtra.jpg",
  },
];

function page() {
  return (
    <div className="    space-y-10  ">
      {places.map((place, i) => (
        <div className="bg-bg-grey">
          <div
            key={place.title}
            className={`grid lg:grid-cols-2 sm:gap-x-16 gap-y-4  rounded-xl py-5 sm:py-10 w-11/12 sm:w-11/12 mx-auto`}
          >
            <div
              className={`relative sm:px-5 ${
                i % 2 == 0 ? "sm:order-last" : ""
              }`}
            >
              <h1 className=" block sm:hidden text-base-color text-2xl  font-semibold ">
                {place.title}
              </h1>
              <div className=" relative z-10  py-2 sm:py-6 ">
                <img
                  src={place.imgSrc}
                  alt={place.title}
                  className="rounded-xl "
                />
              </div>
            </div>
            <div
              className={` self-center  ${
                i % 2 == 0 ? "px-3" : "pl-0 sm:pl-5"
              }`}
            >
              <h1 className=" hidden sm:block text-base-color text-xl lg:text-2xl font-semibold xl:text-4xl sm:mb-3 mb-1">
                {place.title}
              </h1>
              <span className="text-text-grey text-xs sm:text-sm  lg:text-sm xl:text-lg">
                {place.desc}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default page;
