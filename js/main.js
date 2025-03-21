import { initHeader } from "./header.js";
import { initCarousel } from "./carousel.js";
import { Console, upgradedConsole } from "./console.js";
import { slider } from "./slider.js";
import { initAnimations } from "./animations.js";

console.log("Javascript file is connected");

const PS1 = new Console(
  "PlayStation 1",
  "1994",
  "PS1: The Pioneer",
  "The PlayStation One (PS1), released by Sony in 1994 (Japan) and 1995 (Worldwide), marked a turning point in the gaming industry. Originally born from a failed partnership with Nintendo, the console introduced CD-based gaming, allowing for improved graphics, enhanced sound, and larger game storage compared to cartridges. With its sleek design, easy development process, and strong third-party support, the PS1 quickly became one of the best-selling consoles of all time, surpassing 100 million units. Its success established Sony as a major player in the gaming industry and set the foundation for future PlayStation consoles.",
  "The PlayStation One (PS1) brought significant innovations to gaming, including CD-ROM technology for better graphics, sound, and larger games. It popularized 3D polygon-based graphics and introduced advanced audio with CD-quality sound and full voice acting. Memory cards allowed players to save progress independently, while the DualShock controller added analog sticks and vibration for enhanced gameplay. Strong third-party support contributed to a vast and diverse game library.",
  "The PlayStation One (PS1) featured various accessories that enhanced gameplay. The DualShock controller introduced analog sticks and vibration for better control and immersion. Memory cards were essential for saving progress since the console lacked internal storage. The Multitap allowed up to four players to connect, while the PlayStation Mouse provided better precision for certain games. The Link Cable enabled multiplayer gaming between two PS1 consoles on separate TVs, and the LCD Screen offered a portable gaming option when paired with a power adapter.",
  ["Final Fantasy VII", "Resident Evil 2", "Crash Bandicoot"],
  0 // index
);

const PS2 = new Console(
  "PlayStation 2",
  "2000",
  "PS2: The Legend",
  "The PlayStation 2 (PS2), released by Sony in 2000, built upon the success of its predecessor and became the best-selling console of all time. It introduced a powerful hardware upgrade, enabling improved graphics and performance, while maintaining backward compatibility with PS1 games. Built-in DVD player, the PS2 doubled as a multimedia device, contributing to its widespread popularity. Strong third-party support and a vast game library helped solidify its dominance in the gaming industry. Selling over 155 million units, the PS2 further cemented Sony's position as a leader in the console market.",
  "PS2 brought several key advancements to gaming. It introduced DVD-based games, offering larger storage capacity and better graphics. The console popularized motion capture and more detailed 3D environments, pushing the boundaries of game visuals. It also included backward compatibility with PS1 games, making it a versatile choice for gamers. The DualShock 2 controller refined the design with improved analog sticks and additional buttons. With strong third-party support and an enormous library, the PS2 solidified its place as one of the most influential consoles in gaming history.",
  "The PlayStation 2 (PS2) had several accessories that enhanced the gaming experience. The DualShock 2 controller featured improved analog sticks and buttons for more precise control. The PS2 Memory Card allowed players to save their progress and manage multiple game saves. The Multitap accessory enabled up to four players to join in compatible games. The PS2 EyeToy introduced motion-sensing technology for interactive gameplay, while the USB Keyboard and Mouse supported certain PC-style games. Additionally, the PlayStation 2 Network Adapter enabled online gaming, expanding the console's capabilities.",
  ["Grand Theft Auto: San Andreas", "Shadow of the Colossus", "God of War II"],
  1 // index
);

const PS3 = new Console(
  "PlayStation 3",
  "2006",
  "PS3: The Powerhouse",
  "The PlayStation 3 (PS3), released by Sony in 2006, was a major leap forward in gaming technology. It introduced Blu-ray disc support, offering much larger storage than DVDs, which allowed for high-definition graphics and expansive game worlds. The PS3 also featured a powerful processor (Cell Broadband Engine), making it capable of handling complex, graphically rich games. The PS3 became the first console to support HD gaming and online gaming through the PlayStation Network (PSN). With its sleek design, built-in Wi-Fi, and the ability to play HD movies and stream media, the PS3 was a multifunctional device. Selling over 87 million units, it played a key role in solidifying Sony's came an all-in-one entertainment device.",
  "The PlayStation 3 (PS3) brought several key evolutions that advanced gaming and entertainment. Blu-ray Technology was a major evolution, allowing for high-definition game and movie storage, offering much larger capacity than DVDs. This made the PS3 one of the first consoles to offer HD gaming and HD movie playback, setting the stage for the future of digital entertainment. The Cell Broadband Engine processor provided powerful hardware for complex graphics and faster load times, pushing the limits of what was possible in video games at the time. The PS3 also supported online connectivity via the PlayStation Network (PSN), enabling online multiplayer, digital downloads, and media streaming, marking a significant shift in how players interacted with games and content. Additionally, the PS3's wireless connectivity and Bluetooth support allowed for more flexible, untethered gameplay, and the Sixaxis and DualShock 3 controllers introduced motion-sensing and wireless technology, making gaming more interactive. The inclusion of a hard drive in every model also allowed players to store game data, downloadable content, and even media files, making the PS3 an all-in-one entertainment hub. These evolutions transformed the PS3 from just a gaming console into a complete home entertainment system, solidifying its place in gaming history.",
  "The PlayStation 3 (PS3) had a range of accessories that enhanced the gaming experience. The DualShock 3 controller added wireless connectivity and motion-sensing capabilities, improving gameplay immersion. The PlayStation Move motion controller allowed for more interactive experiences in compatible games, similar to other motion-based gaming systems. The PS3 Eye Camera offered motion tracking and was used for certain games and video chat. The PS3 Blu-ray Remote Control provided easy navigation of movies and media on the console, making it a great all-in-one entertainment device. External hard drives could be used for additional storage, while the PlayStation Headset allowed players to communicate during online multiplayer games. The Multitap accessory allowed more players to join in on local multiplayer games when supported, and the PlayStation Network (PSN) cards provided an easy way to add funds to the user's PSN account for digital content.",
  ["The Last of Us", "Uncharted 2: Among Thieves", "Red Dead Redemption"],
  2 // index
);

const PS4 = new Console(
  "PlayStation 4",
  "2013",
  "PS4: The Game-Changer",
  "The PlayStation 4 (PS4), released by Sony in 2013, represented a major leap forward in gaming, focusing on performance, connectivity, and social gaming. With its powerful hardware, including a custom AMD processor and 8GB of GDDR5 RAM, the PS4 delivered stunning graphics, fast load times, and smooth gameplay. The PS4 was designed for HD gaming and 4K media streaming, making it a hub for both gaming and entertainment. The console introduced a more user-friendly interface, improved PlayStation Network (PSN) services, and a strong focus on digital downloads and streaming. The PS4 also enhanced social features with the introduction of the Share button on the controller, allowing users to share gameplay, stream, and connect with friends seamlessly. With over 116 million units sold, the PS4 became one of the best-selling consoles of all time and established Sony as a dominant force in the gaming market.",
  "The PlayStation 4 (PS4) introduced several key innovations to gaming. The console was powered by an AMD x86-64 processor, delivering impressive graphics and faster performance compared to previous consoles. It also supported HD and 4K resolution for games and media, improving the visual experience.The DualShock 4 controller featured a touchpad, improved motion sensors, and an integrated light bar, offering a more dynamic and responsive gaming experience. The PS4 also introduced a more social gaming experience, allowing players to stream their gameplay directly to platforms like Twitch and YouTube, while the Share button made it easier to capture and share moments with friends. Additionally, the PS4 included built-in Wi-Fi, Blu-ray support, and access to PlayStation Plus, which provided online multiplayer and exclusive content. The console also offered VR compatibility with the PlayStation VR headset, making it one of the first mainstream consoles to embrace virtual reality.",
  "The PlayStation 4 (PS4) came with several accessories that enhanced the gaming experience. The DualShock 4 controller featured improved ergonomics, a touchpad, a built-in speaker, and a light bar for more interactive gameplay. The PlayStation Camera provided motion-tracking and voice recognition, supporting features like facial recognition and PSVR for virtual reality gaming. The PlayStation VR headset allowed players to experience immersive virtual reality gaming with a range of compatible titles. For multiplayer gaming, players could use the DualShock 4 Charging Station to charge multiple controllers at once. The PlayStation Move controllers were also compatible with PSVR for more immersive experiences. Additionally, the PlayStation Gold Wireless Headset offered high-quality sound and built-in surround sound for a more immersive audio experience during gaming sessions. The PlayStation TV allowed users to stream PS4 games to another TV in the house, while the PlayStation Now subscription service enabled access to a library of games via cloud streaming",
  ["Red Dead Redemption 2", "Marvel's Spider-Man", "The Last of Us Part II"],
  3 // index
);

const PS5 = new upgradedConsole(
  "PlayStation 5",
  "2020",
  "PS5: The Future",
  "The PlayStation 5 (PS5), released by Sony in November 2020, brought next-generation gaming to life with cutting-edge technology and design. Powered by a custom AMD processor, 16GB of GDDR6 RAM, and a custom SSD, the PS5 offers incredibly fast load times, enhanced graphics, and smoother performance. It supports 4K gaming at 120Hz, with the potential for 8K output, setting a new standard for visual quality and frame rates. The PS5 also introduced the DualSense controller, which features adaptive triggers and haptic feedback, creating an immersive experience with more dynamic and responsive gameplay. The console supports Ray Tracing, improving lighting, reflections, and shadow details in games, providing a more realistic visual experience. The PS5 also continues Sony’s focus on digital integration, with a redesigned PlayStation Store and new features for online gaming, game streaming, and backward compatibility for most PS4 games. With its sleek design and innovative features, the PS5 quickly became a must-have for gamers and further cemented Sony's position as a leader in the gaming industry.",
  "The PlayStation 5 (PS5) brings several key advancements to gaming. Powered by a custom AMD Zen 2 processor and RDNA 2 graphics, the PS5 supports 4K resolution at 120Hz and even 8K output for a visually stunning experience. Its custom SSD drastically reduces load times, allowing for near-instant access to games and smoother transitions between levels. The DualSense controller is a standout feature, offering adaptive triggers that provide variable resistance depending on in-game actions, as well as haptic feedback for a more tactile gaming experience. The controller also includes a built-in microphone for voice chat, adding to its versatility. The PS5 supports Ray Tracing, which enhances the lighting and shadow effects in games, providing a more lifelike experience. Additionally, the PS5 includes 3D Audio, delivering an immersive sound experience with compatible headphones. The console also boasts backward compatibility for most PS4 games, allowing players to enjoy their existing library on the new system. Enhanced PlayStation Plus and PlayStation Now services provide access to a growing collection of games for streaming and download.",
  "The PlayStation 5 (PS5) offers several accessories that enhance the gaming experience. The DualSense controller is one of the standout features, with adaptive triggers, haptic feedback, and a built-in microphone for immersive gameplay. The PS5 HD Camera allows for streaming and video capture with 1080p resolution, making it ideal for content creators. The Pulse 3D Wireless Headset offers 3D audio support, delivering an immersive sound experience when playing compatible games. For charging, the DualSense Charging Station allows you to charge two controllers simultaneously, keeping them ready for multiplayer sessions. The Media Remote makes navigating streaming apps and media on the PS5 simple and convenient. Additionally, the PlayStation VR headset is compatible with the PS5, continuing Sony’s push into virtual reality gaming, and PlayStation 5 Storage Expansion Cards allow players to add additional storage, ensuring enough space for the next-generation games.",
  ["God Of War Ragnarok", "Elden Ring", "Hogwarts Legacy"],
  4 // index
);

const consoles = [PS1, PS2, PS3, PS4, PS5];

consoles.forEach((console) => {
  console.consoleInfo();
  console.gameInfo();
});

initHeader();
initCarousel(consoles);
slider(consoles);
initAnimations();
