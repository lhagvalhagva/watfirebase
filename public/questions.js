// Default асуултууд
const questions = {
  "What's your name?": {
    en: "Hello, my name is [Name]. I chose this name because my parents were inspired by its meaning which represents [meaning].",
    mn: "Сайн байна уу, миний нэр [Нэр]. Энэ нэрийг эцэг эх минь [утга] гэсэн утгатай учраас өгсөн юм.",
    isProtected: true,
  },
  "Can you introduce yourself and your family?": {
    en: "I am [age] years old and I'm a student at [university name]. I live with my family - my father works as [profession], my mother is a [profession], and I have [number] siblings. We are a close family because we always support each other.",
    mn: "Би [нас] настай, [их сургуулийн нэр] их сургуульд суралцдаг. Би гэр бүлтэйгээ хамт амьдардаг - аав маань [мэргэжил] ажилтай, ээж [мэргэжил] ажилтай, би [тоо] ах/эгч/дүүтэй. Бид бие биенээ дэмждэг учраас нягт холбоотой гэр бүл юм.",
    isProtected: true,
  },
  "Can you tell me why you would like to come on Work and Travel program?": {
    en: "I would like to come on the Work and Travel program because it's a great opportunity to improve my English skills, experience a new culture, and meet people from around the world. This experience will help me grow both personally and professionally.",
    mn: "Би Work and Travel хөтөлбөрт оролцохыг хүсэж байна, учир нь энэ нь миний англи хэлний мэдлэгээ сайжруулах, шинэ соёлтой танилцах, дэлхийн өнцөг булан бүрээс ирсэн хүмүүстэй танилцах гайхалтай боломж юм. Энэ туршлага надад хувь хүний болон мэргэжлийн хувьд өсөхөд тусална.",
    isProtected: true,
  },
  "Why did you decide to participate in Work and Travel program?": {
    en: "I decided to participate in the Work and Travel program because I want to gain international work experience, which will be valuable in my future career. Additionally, I am excited to explore American culture and improve my language skills in a real-world setting.",
    mn: "Би Work and Travel хөтөлбөрт оролцохоор шийдсэн, учир нь олон улсын ажлын туршлага хуримтлуулахыг хүсэж байна, энэ нь миний ирээдүйн карьерт үнэ цэнэтэй байх болно. Мөн Америкийн соёлыг судлах, бодит орчинд хэлний мэдлэгээ дээшлүүлэхийг тэсэн ядан хүлээж байна.",
    isProtected: true,
  },
  "Do you have any hobbies?": {
    en: "Yes, I enjoy [hobby] and [another hobby] because these activities help me relax and develop new skills. I spend about [number] hours per week on my hobbies, and I've been doing them for [number] years.",
    mn: "Тийм, би [хобби] болон [өөр хобби] сонирхдог. Учир нь эдгээр үйл ажиллагаа нь надад амрах, шинэ чадвар эзэмших боломж олгодог. Би долоо хоногт ойролцоогоор [цаг] цаг зарцуулдаг бөгөөд [жил] жилийн турш эдгээр хоббигоороо хичээллэж байна.",
    isProtected: true,
  },
  "What do you do?": {
    en: "I am a student studying [major] at [university name] university. I also work part-time as [job] because I want to gain practical experience while studying.",
    mn: "Би [их сургуулийн нэр] их сургуульд [мэргэжил] мэргэжлээр суралцдаг. Мөн сурлагынхаа хажуугаар [ажил]-аар цагийн ажил хийдэг. Учир нь суралцах хугацаандаа практик туршлага хуримтлуулахыг хүсдэг.",
    isProtected: true,
  },
  "What major do you study?": {
    en: "I study [major] because this field combines my interest in [specific interest] with good career opportunities. I am currently in my [1st/2nd/3rd/4th] year.",
    mn: "Би [мэргэжил] мэргэжлээр суралцдаг. Учир нь энэ салбар миний [сонирхол] сонирхолтой хослоод ажил мэргэжлийн сайн боломжтой. Одоо [1/2/3/4] курст суралцаж байна.",
    isProtected: true,
  },
  "Why did you choose this major?": {
    en: "I chose this major because I have always been interested in computer science. Also, this field has good job prospects in Mongolia, and I can use these skills to develop innovative software solutions for local businesses.",
    mn: "Энэ мэргэжлийг сонгосон шалтгаан нь би компьютерийн шинжлэх ухаан -д үргэлж сонирхолтой байсан. Мөн энэ салбар Монголд ажлын сайн боломжтой бөгөөд би эдгээр ур чадвараа дотоодын компаниудад програм хангамжийн шийдэл боловсруулахад ашиглаж чадна.",
    isProtected: true,
  },
  "Is this a popular major in your country?": {
    en: "Yes, this major is highly sought after. Currently, about 2000 students study this field in Mongolia because of the growing IT sector. The demand for this profession is increasing rapidly.",
    mn: "Тийм, энэ мэргэжил маш их эрэлттэй. Одоогоор Монголд ойролцоогоор 2000 оюутан энэ чиглэлээр суралцаж байгаа. Учир нь мэдээллийн технологийн салбар өсөж байгаа. Энэ мэргэжлийн эрэлт хурдацтай нэмэгдэж байна.",
    isProtected: true,
  },
  "Do you have any other person in this major in your family?": {
    en: "Yes. My older sister studied this major because she was inspired by the tech industry's growth.",
    mn: "Тийм. Манай эгч энэ мэргэжлээр суралцсан. Учир нь технологийн салбарын өсөлтөд татагдсан.",
    isProtected: true,
  },
  "How many more years do you have left to finish your school?": {
    en: "I have 1 year left to finish my degree. I will graduate in June 2026 because our program is 4 years long.",
    mn: "Надад сургуулиа төгсөхөд 2 жил үлдсэн. Манай хөтөлбөр 4 жилийн хугацаатай учраас би 2026 оны 6-р сард төгсөнө.",
    isProtected: true,
  },
  "What university do you go to?": {
    en: "I study at National University of Mongolia. I chose this university because it has a strong program in computer engineering and excellent facilities for practical programming training.",
    mn: "Би Монгол Улсын Их Сургууль-д суралцдаг. Энэ сургуулийг сонгосон шалтгаан нь компьютерийн инженерчлэл чиглэлээр хүчтэй хөтөлбөртэй бөгөөд програмчлалын дадлага-д зориулсан сайн тоноглогдсон байгууламжтай.",
    isProtected: true,
  },
  "What course are you?": {
    en: "I am in my 3rd year. This year is important because we are studying software engineering and learning about algorithms.",
    mn: "Би 3-р курст суралцаж байна. Энэ жил чухал учир нь бид програмын инженерчлэл судалж, алгоритмууд -ын талаар суралцаж байна.",
    isProtected: true,
  },
  "Is there any particular place you would like to visit in the US?": {
    en: "Yes, I would really like to visit New York because of its vibrant culture. I am interested in seeing the Statue of Liberty and experiencing the city's nightlife.",
    mn: "Тийм, би Нью-Йорк -д очихыг маш их хүсэж байна. Учир нь түүний амьдралтай соёл. Би Чөлөөний хөшөө үзэж, тэр хотын шөнийн амьдралыг мэдрэхийг сонирхож байна.",
    isProtected: true,
  },
  "Why?": {
    en: "Because this place represents the American dream and offers unique opportunities to meet diverse people. Also, I have always been fascinated by the history of the city.",
    mn: "Учир нь энэ газар Америкийн мөрөөдөл -г илэрхийлдэг бөгөөд олон янзын хүмүүс -тэй уулзах онцгой боломжуудыг олгодог. Мөн би хотын түүх -д үргэлж татагддаг.",
    isProtected: true,
  },
  "Will you travel in the US?": {
    en: "Yes, I plan to travel during my free time and after completing my work commitment. I want to visit California because of its beautiful beaches, and I have saved $500 for travel expenses.",
    mn: "Тийм, би чөлөөт цагаараа болон ажлын гэрээгээ дуусгасны дараа аялахаар төлөвлөж байна. Би Калифорнид очихыг хүсэж байгаа. Учир нь гуа зандан загаснууд -тай, мөн аяллын зардалд 500 доллар хэмжээний мөнө хуримтлуулсан.",
    isProtected: true,
  },
  "What part of Mongolian culture do you hope to share with Americans?": {
    en: "I want to share our traditional dance, our unique cuisine, and teach them about our nomadic lifestyle. These aspects of our culture are important because they show our connection to nature.",
    mn: "Би манай уламжлалт бүжиг, онцгой хоол хүнс, мөн нүүдлийн амьдрал -ын талаар тэдэнд заахыг хүсэж байна. Эдгээр соёлын хэсгүүд чухал учир нь байгальтайгаа холбоотойг харуулдаг.",
    isProtected: true,
  },
  "What kind of movies do you like to watch? Do you watch TV series?": {
    en: "I enjoy watching action movies because they are exciting. Yes, I watch TV series, particularly dramas because they tell deep stories.",
    mn: "Би экшн төрлийн кино үзэх дуртай. Учир нь тэд сэтгэл хөдөлгөм. Тийм, би олон ангит кино үздэг, ялангуяа драм. Учир нь тэд гүнзгий түүхүүдийг өгүүлдэг.",
    isProtected: true,
  },
  "What kind of music do you like to listen to?": {
    en: "I prefer pop music because it lifts my mood. My favorite artists are Taylor Swift and Ed Sheeran because their music is relatable and meaningful.",
    mn: "Би поп хөгжим сонсох дуртай. Учир нь миний сэтгэл хөөрлийг дээшлүүлдэг. Миний дуртай уран бүтээлчид бол Тэйлор Свифт, Эд Ширан. Учир нь тэдний хөгжим холбогдолтой, утгатай.",
    isProtected: true,
  },
  "What do you do with your friends in your free time?": {
    en: "With my friends, I usually hang out at cafes. We enjoy these activities because they help us relax and catch up. We meet about twice per month.",
    mn: "Би найзуудтайгаа ихэвчлэн кафе дээр уулздаг. Бид эдгээр үйл ажиллагааг таалдаг. Учир нь амрахад, нөхөрлөхөд туслалцаа үзүүлдэг. Бид сард ойролцоогоор хоёр удаа уулздаг.",
    isProtected: true,
  },
  "How much do you know about America?": {
    en: "I know about American history, geography, and culture. I learned this through classes and documentaries. I'm especially interested in its diverse cultures.",
    mn: "Би Америкийн түүх, географи, болон соёл -ын талаар мэднэ. Үүнийг би хичээл болон баримтат киногоор дамжуулан мэдсэн. Би ялангуяа олон янзын соёл -д сонирхолтой байдаг.",
    isProtected: true,
  },
  "Have you learned anything about American culture from movies or through your classes?":
    {
      en: "Yes, I've learned about American values from movies and social norms from my classes. These taught me that American culture values freedom and individualism.",
      mn: "Тийм, би киноноос Америкийн үнэт зүйлс, хичээлээрээ нийгмийн хэв маяг -ын талаар сурсан. Эдгээр нь Америкийн соёл бие даасан байдал, эрх чөлөө -г эрхэмлэдгийг надад заасан.",
      isProtected: true,
    },
  "What kind of sports do you like?": {
    en: "I like basketball because it is fast-paced and fun. This sport teaches me teamwork and helps me stay fit.",
    mn: "Би сагсан бөмбөг спортод дуртай. Учир нь энэ нь хурдтай, хөгжилтэй. Энэ спорт надад багийн ажиллагаа -г заадаг бөгөөд фит байхад тусалдаг.",
    isProtected: true,
  },
  "Do you play any sports?": {
    en: "Yes, I play basketball. I've been playing for five years because I enjoy the competition. I practice three times per week.",
    mn: "Тийм, би сагсан бөмбөг тоглодог. Би таван жилийн турш тоглож байгаа. Учир нь миний өрсөлдөх дуртай. Долоо хоногт гурав удаа дасгал хийдэг.",
    isProtected: true,
  },
  "Do you play in a team or do you just play for fun?": {
    en: "I play in a team because it builds camaraderie. This helps me develop leadership skills and discipline.",
    mn: "Би багийн тоглодог. Учир нь найрсаг хамтын ажиллагааг бий болгодог. Энэ нь надад удирдлага ур чадвар болон дисциплин -г хөгжүүлэхэд тусалдаг.",
    isProtected: true,
  },
  "Do you have any job experience?": {
    en: "Yes, I worked as a barista for two years. I gained experience in customer service and learned how to handle different situations.",
    mn: "Тийм, би кафе -д хоёр жил ажилласан. Би үйлчлүүлэгчийн үйлчилгээ -нд туршлага олж, бусад нөхцөл байдлыг хэрхэн зохицуулах -г сурсан.",
    isProtected: true,
  },
  "What was your duty there?": {
    en: "My main responsibilities included [task], [task], and [task]. I was in charge of [responsibility] because [reason].",
    mn: "Миний гол үүрэг [үүрэг], [үүрэг], болон [үүрэг] байсан. Би [хариуцлага]-г хариуцдаг байсан. Учир нь [шалтгаан].",
    isProtected: true,
  },
  "How did you like working there?": {
    en: "I enjoyed working there because [reason]. The experience taught me [skill] and helped me develop [ability].",
    mn: "Тэнд ажиллах надад таалагдсан. Учир нь [шалтгаан]. Энэ туршлага надад [ур чадвар]-г заасан бөгөөд [чадвар]-г хөгжүүлэхэд тусалсан.",
    isProtected: true,
  },
  "Do you like living in Mongolia?": {
    en: "Yes, I like living in Mongolia because of our [aspect] culture, [aspect] community, and [feature]. However, I want to experience living in America to [goal].",
    mn: "Тийм, би Монголд амьдрах дуртай. Учир нь манай [шинж] соёл, [шинж] нийгэм, болон [шинж]. Гэхдээ би [зорилго]-ын тулд Америкт амьдрах туршлага хүсэж байна.",
    isProtected: true,
  },
  "What is your favorite actor/actress/singer/band?": {
    en: "My favorite is [name] because their [quality] inspires me. I especially like their [work] because [reason].",
    mn: "Миний дуртай нь [нэр]. Учир нь тэдний [чанар] намайг урамшуулдаг. Би ялангуяа тэдний [бүтээл]-д дуртай. Учир нь [шалтгаан].",
    isProtected: true,
  },
  "What would you do when you go back to Mongolia?": {
    en: "When I return, I plan to [plan] and [plan]. This experience will help me [goal] because [reason].",
    mn: "Буцаж ирээд би [төлөвлөгөө] болон [төлөвлөгөө] төлөвлөж байна. Энэ туршлага надад [зорилго]-д туслах болно. Учир нь [шалтгаан].",
    isProtected: true,
  },
  "What things do you want to do in the US?": {
    en: "In the US, I want to [activity], learn about [aspect], and experience [experience]. These activities will help me [benefit].",
    mn: "АНУ-д би [үйл ажиллагаа], [зүйл]-ын талаар суралцаж, [туршлага]-г мэдрэхийг хүсэж байна. Эдгээр үйл ажиллагаа надад [ашиг]-д туслах болно.",
    isProtected: true,
  },
  "What is your GPA?": {
    en: "My GPA is [number]. I maintain this by [method] and [method]. I study [number] hours daily.",
    mn: "Миний голч дүн [тоо]. Би [арга] болон [арга]-р үүнийг хадгалж байна. Би өдөрт [цаг] цаг суралцдаг.",
    isProtected: true,
  },
  "Have you ever been to any other countries before?": {
    en: "Yes/No. I have visited [country name(s)] because [reason]. The experience taught me [lesson] and [lesson].",
    mn: "Тийм/Үгүй. Би [улсын нэр]-д зочилсн. Учир нь [шалгаан]. Энэ туршлага надад [сургамж] болон [сургамж]-г заасан.",
    isProtected: true,
  },
  "How did you like it?": {
    en: "I enjoyed it because it was fun. The most impressive thing was the scenery and I learned a lot about the culture.",
    mn: "Надад таалагдсан. Учир нь энэ н хөгжилтэй байсан. Хамгийн гайхалтай зүйл нь ургамлын дэлгэрэнгүй байсан бөгөөд би соёлын талаар их зүйлийг сурсан.",
    isProtected: true,
  },
  "What part of the US would you like to go to during the WAT program?": {
    en: "I would like to go to California because of the beautiful weather. This location offers opportunities for networking and experiencing diverse cultures.",
    mn: "Би Калифорнид очихыг хүсэж байна. Учир нь сайхан цаг агаар байна. Энэ байршил сүлжээний боломжууд болон эрх мэдлийн соёлыг мэдрэх боломжуудыг олгодог.",
    isProtected: true,
  },
  "What is your favorite subject at school?": {
    en: "My favorite subject is science because I love learning about the world. I find it interesting when we study biology and chemistry.",
    mn: "Миний дуртай хичээл бол шинжлэх ухаан. Учир нь би дэлхийн талаар сурах дуртай. Бид биологи болон хими судлах үед надад сонирхолтой санагддаг.",
    isProtected: true,
  },
  "After you graduate from university, what would you do? Where would you work?":
    {
      en: "After graduation, I plan to pursue a career in technology and work as a software developer. I chose this path because I enjoy coding and the tech industry is growing.",
      mn: "Төгсөлтийн дараа би технологийн салбарт карьераа цаашид хөгжүүлэх төлөвлөж, програмчлалын хөгжүүлэгч -аар ажиллах болно. Би энэ замыг сонгосон, учир нь кодлох дуртай бөгөөд технологийн салбар өсч байна.",
      isProtected: true,
    },
  "Do you have any talent?": {
    en: "Yes, I am good at playing the guitar and singing. I developed these talents through music lessons and practice them by performing at local events.",
    mn: "Тийм, би гитар тоглоход болон дуулхад сайн. Би эдгээр авьяасаа музыкийн хичээлээр хөгжүүлж, газар нутгийн арга хэмжээнд тоглож сурдаг.",
    isProtected: true,
  },
  "What is your strength?": {
    en: "My main strengths are communication and problem-solving. These help me in team projects because I can effectively share ideas.",
    mn: "Миний гол давуу тал бол харилцаа болон асуулт шийдвэрлэх. Эдгээр нь надад багийн төслүүд -д тусалдаг. Учир нь би санаа бодлоо үр дүнтэй хуваалцах боломжтой.",
    isProtected: true,
  },
  "What is your weakness?": {
    en: "My weakness is time management. I am working to improve this by setting clear goals because I want to be more organized.",
    mn: "Миний сул тал бол цагийн менежмент. Би үүнийг тодорхой зорилтуудыг тогтоосноор сайжруулахаар ажиллаж байна. Учир нь би илүү зохион байгуулалттай болохыг хүсэж байна.",
    isProtected: true,
  },
  "What do you think is the key to success?": {
    en: "I believe the key to success is hard work and determination. These are important because they drive you to achieve your goals.",
    mn: "Амжилтын түлхүүр бол хичээл зүтгэл болон бодлого гэж би боддог. Эдгээр нь чухал. Учир нь тэд таныг зорилгодоо хүрэхэд урамшуулах.",
    isProtected: true,
  },
  "How long have you been studying English?": {
    en: "I have been studying English for three years. I practice by reading books and watching movies.",
    mn: "Би англи хэл гурван жил сурч байна. Би ном уншиж болон кино үзэж дадлага хийдэг.",
    isProtected: true,
  },
  "What is your future plan?": {
    en: "My future plans include traveling the world and continuing my education. I chose these goals because I want to experience new cultures.",
    mn: "Миний ирээдүйн төлөвлөгөөнд дэлхий даяар аялалт болон суралцагчийнхаа боловсролыг үргэлжлүүлэх багтана. Би эдгээр зорилгыг сонгосон, чир нь шинэ соёлыг мэдрэхийг хүсэж байна.",
    isProtected: true,
  },
  "What is the main purpose that you are going to the US?": {
    en: "My main purpose is to gain international experience, gain experience in my field, and improve my English. These will help me advance my career.",
    mn: "Миний гол зорилго бол олон улсын туршлага авах, салбарт туршлага олж авах, болон англи хэлээ сайжруулах. Эдгээр нь надад карьертаа дэвшүүлэхэд туслах болно.",
    isProtected: true,
  },
  "Do you have any siblings?": {
    en: "Yes, I have one older sister. We are close because we share many interests.",
    mn: "ийм, надад нэг ах эгч бий. Бид ойр дотно. Учир нь бид олон сонирхлыг хуваалцдаг.",
    isProtected: true,
  },
  "Have you ever been outside of your country?": {
    en: "Yes, I visited Japan for two weeks. The experience was valuable because I learned about their culture and traditions.",
    mn: "Тийм, би Япон -д хоёр долоо хоног зочилсон. Энэ туршлага үнэ цэнэтэй байсан, учир нь би тэдний соёл, уламжлалын талаар мэдсэн.",
    isProtected: true,
  },
  "Have you ever traveled through your country?": {
    en: "Yes, I have visited several regions of Mongolia because I wanted to see the natural beauty. I learned about the history of each place.",
    mn: "Тийм, би Монголын олон бүс нутгаар аялсан. Учир нь би байгальийн сайханыг харахыг хүссэн. Би тус бүрийн түүхийг мэдсэн.",
    isProtected: true,
  },
  "What is the most memorable moment in your life?": {
    en: "My most memorable moment was when I graduated from high school. It's important to me because it marked a new beginning.",
    mn: "Миний хамгийн дурсамжтай мөч бол багшийн дээд сургууль төгссөн. Энэ надад чухал, учир нь шинэ эхлэл байлаа.",
    isProtected: true,
  },
  "Are you able to be at your employer by June 1st?": {
    en: "Yes, I can be there by June 1st because I have arranged my travel plans. My schedule allows me to be flexible.",
    mn: "Тийм, би 6-р сарын 1 -нд очиж чадна. Учир нь би аяллын төлөвлөгөөгөө зохион байгуулсан. Миний хуваарь улаан хаалга -аар орох боломжийг олгодог.",
    isProtected: true,
  },
  "What kind of job can you do?": {
    en: "I can work as a customer service representative because I have experience in customer service and I enjoy working with people.",
    mn: "Би үйлчилгээний төлөөлөгч ажил хийж чадна, учир нь би үйлчилгээний салбарт туршлагатай бөгөөд хүмүүстэй ажиллах дуртай.",
    isProtected: true,
  },
  "What kind of job would you like to do?": {
    en: "I would like to work as a marketing specialist because it matches my skills in communication and I want to gain more experience in this field.",
    mn: "Би маркетингийн мэргэжилтэн ажил хийхийг хүсэж байна, учир нь энэ нь миний харилцаа ур чадвартай нийцэж байгаа бөгөөд би энэ чиглэлээр илүү их туршлага хуримтлуулахыг хүсэж байна.",
    isProtected: true,
  },
  "What makes you think you can do this job?": {
    en: "I believe I can do this job because I have studied business management for four years and I have good organizational skills.",
    mn: "Би энэ ажлыг хийж чадна гэж боддог, учир нь би бизнесийн удирдлагыг дөрвөн жил судалсан бөгөөд зохион байгуулалтын сайн ур чадвартай.",
    isProtected: true,
  },
  "Why do you think you are suitable for this position?": {
    en: "I am suitable for this position because I am [hardworking] and [organized], and I have experience in [customer service].",
    mn: "Би энэ албан тушаалд тохиромжтой гэж боддог, учир нь би [хичээнгүй] бөгөөд [эмх цэгцтэй], мөн [үйлчилгээний салбарын] туршлагатай.",
    isProtected: true,
  },
  "If you don't get the job you wanted, would you still continue the program?":
    {
      en: "Yes, I would continue because this program is a valuable opportunity to gain international experience and improve my English skills.",
      mn: "Тийм, би үргэлжлүүлнэ, учир нь энэ хөтөлбөр бол олон улсын туршлага олж авах, англи хэлний мэдлэгээ сайжруулах үнэ цэнэтэй боломж юм.",
      isProtected: true,
    },
  "What part of the US would you like to go to on the WAT program?": {
    en: "I would like to go to [California] because I am interested in its [beaches] and there are many job opportunities there.",
    mn: "Би [Калифониа] руу явахыг хүсэж байна, учир нь би түүний [далайн эргүүд]-д сонирхолтой бөгөөд тэнд олон ажлын боломжууд байдаг.",
    isProtected: true,
  },
  "What is the first thing you will do when you arrive in the US?": {
    en: "First, I will check in with my program coordinator and get settled in my accommodation because it's important to have a secure base before starting work.",
    mn: "Эхлээд би хөтөлбөрийн зохицуулагчтайгаа уулзаж, байрандаа суурьшина, учир нь ажил эхлэхээс өмнө найдвартай байртай болох нь чухал.",
    isProtected: true,
  },
  "What is your ideal salary?": {
    en: "My expected salary would be [minimum wage] because it would cover my living expenses and allow me to save some money.",
    mn: "Миний хүсэж буй цалин [хамгийн бага цалин] байх болно, учир нь энэ нь миний амьжиргааны зардлыг даах бөгөөд мөнгө хадгалах боломжтой болно.",
    isProtected: true,
  },
  "When does your school end?": {
    en: "My school typically ends in late May or early June. This is because the academic year in Mongolia usually follows a similar schedule to many other countries.",
    mn: "Миний сургууль ихэвчлэн 5-р сарын сүүл эсвэл 6-р сарын эхээр төгсдөг. Учир нь Монгол дахь академик жил ихэнх бусад орны хуваарьтай төстэй байдаг.",
    isProtected: true,
  },
  "Can you swim?": {
    en: "Yes, I can swim. I learned it when I was young because my parents encouraged me to learn water safety skills.",
    mn: "Тийм ээ, би сэлж чадна. Би бага байхдаа сурсан. Учир нь эцэг эх маань намайг усны аюулгүй байдлын ур чадвар эзэмшихэд урамшуулсан юм.",
    isProtected: true,
  },
  "Do you play any musical instrument?": {
    en: "No, I don't play any musical instrument. Unfortunately, I haven't had the opportunity to learn one.",
    mn: "Үгүй ээ, би ямар нэгэн хөгжмий зэмсэг тоглодоггүй. Харамслтай нь, би сурах боломж гараагүй.",
    isProtected: true,
  },

  "Is there any particular city or a place you would like to visit in the US?":
    {
      en: "I'd love to visit New York City. This is because it's a cultural hub with diverse people and exciting opportunities.",
      mn: "Би Нью-Йорк хотыг үзэхийг хүсэж байна. Учир нь энэ бол олон янзын хүмүүс, сонирхолтой боломжуудтай соёлын төв юм.",
      isProtected: true,
    },
  "What is your favorite holiday?": {
    en: "My favorite holiday is Tsagaan Sar, the Mongolian New Year. This is because it's a time for family, tradition, and delicious food.",
    mn: "Миний дуртай баяр бол Цагаан Сар юм. Учир нь энэ бол гэр бүл, уламжлал, амттай хоолны цаг юм.",
    isProtected: true,
  },
  "Can you describe Mongolia?": {
    en: "Mongolia is a landlocked country with vast grasslands and stunning mountains. It's known for its nomadic culture and beautiful nature. This unique landscape has shaped the way of life for Mongolians for centuries.",
    mn: "Монгол улс бол өргөн уудам тал хээр, гайхамшигтай уулстай газар нутагтай эх газраас тусгаарлагдсан улс юм. Энэ нь нүүдэлчин соёл, үзэсгэлэнт байгалаараа алдартай. Энэ онцгой ландшафт нь монголчуудын амьдралын хэв маягийг зууны турш хэлбэржүүлсэн юм.",
    isProtected: true,
  },
  "What part of Mongolia do you live in?": {
    en: "I live in Ulaanbaatar, the capital city of Mongolia.",
    mn: "Би Монгол улсын нийслэл Улаанбаатар хотод амьдардаг.",
    isProtected: true,
  },
  "Who do you live with?": {
    en: "I live with my family, which includes my parents and siblings.",
    mn: "Би эцэг эх, дүү нартайгаа хамт амьдардаг.",
    isProtected: true,
  },
  "What are the things you want to do in the US?": {
    en: "I want to experience American culture, improve my English language skills, and work part-time to gain work experience.",
    mn: "Би Америкийн соёлыг мэдрэх, англи хэлнийхээ чадварыг сайжруулах, ажлын туршлага олж авахын тулд хэсэгчлэн ажиллахыг хүсэж байна.",
    isProtected: true,
  },
  "Do you know anybody in the US?": {
    en: "No, I don't know anyone personally in the US.",
    mn: "Үгүй ээ, би АНУ-д хэн нэгнийг хувь хүний ​​хувьд таньдаггүй.",
    isProtected: true,
  },
  "What is your intended date of arrival in the US?": {
    en: "I plan to arrive in the US on [Your intended date of arrival].",
    mn: "Би [Таны хүссэн ирэх огноо]-нд АНУ-д ирэхээр төлөвлөж байна.",
    isProtected: true,
  },
  "Do you have any health conditions?": {
    en: "No, I don't have any serious health conditions.",
    mn: "Үгүй ээ, надад ямар нэгэн ноцтой эрүүл мэндийн асуудал байхгүй.",
    isProtected: true,
  },
  "Are you allergic to anything?": {
    en: "No, I'm not allergic to anything.",
    mn: "Үгүй ээ, би юманд харшилтай биш.",
    isProtected: true,
  },
  "Do you have any relatives in the US?": {
    en: "No, I don't have any relatives living in the US.",
    mn: "Үгүй ээ, надад АНУ-д амьдардаг хамаатан садан байхгүй.",
    isProtected: true,
  },
  "What do you think about the Work and Travel program?": {
    en: "I think the Work and Travel program is a great opportunity to experience American culture, improve my English, and gain valuable work experience.",
    mn: "Би Work and Travel хөтөлбөр нь Америкийн соёлыг мэдрэх, англи хэлнийхээ чадварыг сайжруулах, үнэ цэнэтэй ажлын туршлага олж авах сайхан боломж гэж боддог.",
    isProtected: true,
  },
  "Who will pay for your travel expenses?": {
    en: "I will be paying for my own travel expenses.",
    mn: "Би өөрийн аялалын зардлыг төлнө.",
    isProtected: true,
  },
  "What's your phone number?": {
    en: "My phone number is [Your phone number].",
    mn: "Миний утасны дугаар [Таны утасны дгаар].",
    isProtected: true,
  },
  "How many siblings do you have?": {
    en: "I have [Number] siblings.",
    mn: "Надад [Тоо] дүү нар бий.",
    isProtected: true,
  },
  "What's your favorite color?": {
    en: "My favorite color is [Your favorite color].",
    mn: "Миний дуртай өнгө бол [Таны дуртай өнгө].",
    isProtected: true,
  },
  "Do you like working in a group or individually?": {
    en: "I prefer working individually, as it allows me to focus better and work at my own pace. However, I can also work effectively in a group.",
    mn: "Би бие даан ажиллахыг илүүд үздэг, учир нь энэ нь надад илүү төвлөрөх, өөрийн хэмнэлээр ажиллах боломжийг олгодог. Гэсэн хэдий ч би баг болж үр дүнтэй ажиллаж чадна.",
    isProtected: true,
  },
  "What is your short and long-term goal?": {
    en: "My short-term goal is to successfully complete my studies and gain valuable work experience through the Work and Travel program. My long-term goal is to pursue a career in [Your desired field] and contribute to the development of my country.",
    mn: "Миний богино хугацааны зорилго бол суралцахаа амжилттай дуусгаж, Work and Travel хөтөлбөрийн ачаар үнэ цэнэтэй ажлын туршлага олж авах явдал юм. Миний урт хугацааны зорилго бол [Таны хүссэн салбар]-д карьер хөөж, улс орныхоо хөгжилд хувь нэмэр оруулах явдал юм.",
    isProtected: true,
  },
  "What kind of cultural difficulties do you expect if you go to the USA?": {
    en: "I expect to encounter language barriers and cultural differences, such as different customs and social norms. However, I'm open to learning and adapting to new experiences.",
    mn: "АНУ-д явахад хэлний саад, өөр ёс заншил, нийгмийн хэм хэмжээ гэх мэт соёлын ялгаатай байдлыг тулгарна гэж бодож байна. Гэсэн хэдий ч би шинэ туршлагад суралцаж, дасан зохицоход нээлттэй байна.",
    isProtected: true,
  },
  "What do you think is the biggest difference between Mongolia and the USA?": {
    en: "One of the biggest differences between Mongolia and the US is the pace of life. The US tends to be faster-paced, while Mongolia has a more relaxed lifestyle.",
    mn: "Монгол, АНУ-ын хоорондох хамгийн том ялгаануудын нэг бол амьдралын хэмнэл юм. АНУ илүү хурдан хэмнэлтэй байдаг бол Монгол улс илүү тайван амьдралын хэв маягтай.",
    isProtected: true,
  },
  "Who is the closest person to you in your family?": {
    en: "My closest person in my family is my [Relationship, e.g., mother, father, sibling]. We share a strong bond and often confide in each other.",
    mn: "Миний гэр бүлд хамгийн ойр хүн бол миний [Харилцаа, жишээ нь ээж, аав, дүү] юм. Бид хүчтэй холбоотой бөгөөд бие биендээ итгэдэг.",
    isProtected: true,
  },
  "What is your parents' occupation?": {
    en: "My father works as a [Father's occupation], and my mother works as a [Mother's occupation].",
    mn: "Миний аав [Аавын ажил]-д ажилладаг, ээж маань [Ээжийн ажил]-д ажилладаг.",
    isProtected: true,
  },
  "What do you like to do in your free time?": {
    en: "In my free time, I enjoy [Your hobbies, e.g., reading, watching movies, playing sports].",
    mn: "Чөлөөт цагаараа би [Таны хобби, жишээ нь унших, кино үзэх, спортоор хичээллэх]-ээс таашаал авдаг.",
    isProtected: true,
  },
  "How do you usually spend your free time?": {
    en: "I usually spend my free time [Your activities, e.g., studying, hanging out with friends, playing video games].",
    mn: "Би чөлөөт цагаа ихэвчлэн [Таны үйл ажиллагаа, жишээ нь суралцах, найз нөхөдтэйгээ уулзах, видео тоглоом тоглох]-д зарцуулдаг.",
    isProtected: true,
  },
  "What will you do in your free time in the United States?": {
    en: "In my free time in the US, I plan to explore new places, try different activities, and make new friends.",
    mn: "АНУ-д чөлөөт цагаараа шинэ газрууд үзэж, янз бүрийн зүйл туршиж үзэх, шинэ найз нөхөдтэй болох төлөвлөгөөтэй байна.",
    isProtected: true,
  },
  "How do you feel about going to the USA?": {
    en: "I'm excited and nervous about going to the US. I'm looking forward to experiencing new things and challenging myself.",
    mn: "Би АНУ-д явахад сэтгэл хөдөлж, сандарч байна. Би шинэ зүйлсийг туршиж үзэх, өөрийгөө сорихыг хүсэн хүлээж байна.",
    isProtected: true,
  },
  "How will you spend Independence Day?": {
    en: "If I'm in the US on Independence Day, I'd love to attend a fireworks display or a parade.",
    mn: "Хэрэв би Тусгаар Тогтнолын өдөр АНУ-д байгаа бол галт наадгамын үзүүлбэр эсвэл жагсаалд оролцохыг хүсэх болно.",
    isProtected: true,
  },
  "What genre of movie do you like?": {
    en: "I enjoy watching [Genre, e.g., action, comedy, drama] movies.",
    mn: "Би [Жанр, жишээ нь адал явдалт, инээдмийн, драма] кино үзэх дуртай.",
    isProtected: true,
  },
  "Who is your best friend? Can you tell me about her/him?": {
    en: "My best friend is [Friend's name]. We've been friends since [How long]. She/He is [Positive qualities, e.g., kind, funny, intelligent].",
    mn: "Миний хамгийн сайн найз бол [Найзын нэр] юм. Бид [Хэр удаан] жилийн турш найзууд байсан. Тэр/Тэр бол [Эерэг шинж чанарууд, жишээ нь сайхан сэтгэлтэй, хөгжилтэй, ухаалаг].",
    isProtected: true,
  },
  "What is the Mongolian currency?": {
    en: "The Mongolian currency is the Tögrög.",
    mn: "Монгол мөнгөн тэмдэгт бол Төгрөг юм.",
    isProtected: true,
  },
  "What can you buy with 1 dollar in Mongolia?": {
    en: "With 1 dollar, you can buy a small snack or a few basic items in Mongolia.",
    mn: "1 доллараар та Монголд жижиг зууш эсвэл хэдэн үндсэн бараа худалдаж авах боломжтой.",
    isProtected: true,
  },
  "If you had a million dollars, how would you spend it? What would you do?": {
    en: "If I had a million dollars, I would invest in my education, travel the world, and help those in need.",
    mn: "Хэрэв надад сая доллар байсан бол би боловсролдоо хөрөнгө оруулах, дэлхийг тойрон аялах, хэрэгтэй хүмүүст туслах байсан.",
    isProtected: true,
  },
  "Do you ever think about studying abroad?": {
    en: "Yes, I've thought about studying abroad to gain new experiences and broaden my horizons.",
    mn: "Тийм ээ, би гадаадад суралцаж шинэ туршлага олж авах, хүрээллээ тэлэх талаар бодож байсан.",
    isProtected: true,
  },
  "Will you do a second job in the US during the WAT program?": {
    en: "I'm open to the possibility of a second job if my schedule allows.",
    mn: "Хэрэв миний хуваарь зөвшөөрвөл би хоёр дахь ажилд орох боломжтой.",
    isProtected: true,
  },
  "Are you participating in this program alone or with your friends?": {
    en: "I'm participating in this program alone.",
    mn: "Би энэ хөтөлбөрт ганцаараа оролцож байна.",
    isProtected: true,
  },
  "How well do you get along with your siblings?": {
    en: "I get along well with my siblings. We often spend time together and support each other.",
    mn: "Би дүү нартайгаа сайн ойлголцдог. Бид ихэнхдээ хамтдаа цагийг өнгөрөөж, бие биедээ тусалдаг.",
    isProtected: true,
  },
  "What lessons are you studying?": {
    en: "I'm currently studying [List of subjects, e.g., English, Mathematics, History].",
    mn: "Одоо би [Хичээлийн жагсаалт, жишээ нь Англи хэл, Математик, Түүх]-ыг судалж байна.",
    isProtected: true,
  },
  "What have you been doing today?": {
    en: "Today, I've been [Your activities, e.g., studying, working, spending time with family].",
    mn: "Өнөөдөр би [Таны үйл ажиллагаа, жишээ нь суралцах, ажиллах, гэр бүлтэйгээ цагийг өнгөрөөх]-д зав гаргасан.",
    isProtected: true,
  },
  "How was your day today?": {
    en: "My day was [Positive or negative adjective, e.g., good, bad, tiring]. I [Describe your day, e.g., studied for an exam, went for a walk].",
    mn: "Өнөөдөр миний өдөр [Эерэг эсвэл сөрөг үг, жишээ нь сайн, муу, ядарсан] байсан. Би [Өдрөө тодорхойлох, жишээ нь шалгалтдаа бэлдсэн, алхсан].",
    isProtected: true,
  },
  "What time is it?": {
    en: "It's [Current time].",
    mn: "Одоо цаг [Одоогийн цаг].",
    isProtected: true,
  },
  "What are you studying at the university?": {
    en: "I'm studying [Your major] at [University name].",
    mn: "Би [Таны мэргэжил]-ийг [Их сургуулийн нэр]-д судалж байна.",
    isProtected: true,
  },
  "How many years have you been studying [Your major]?": {
    en: "I've been studying [Your major] for [Number] years.",
    mn: "Би [Таны мэргэжил]-ийг [Тоо] жил судалж байна.",
    isProtected: true,
  },
  "Do you have any volunteer experience?": {
    en: "Yes, I've volunteered at [Organization] to [Reason, e.g., help the community, gain experience].",
    mn: "Тийм ээ, би [Байгууллага]-д [Шалтгаан, жишээ нь нийгэмд тусла, туршлага олж авах]-ын тулд сайн дураар ажилласан.",
    isProtected: true,
  },
  "Do you watch American movies?": {
    en: "Yes, I enjoy watching American movies, especially [Genre, e.g., action, comedy, drama].",
    mn: "Тийм ээ, би Америкийн кино, ялангуяа [Жанр, жишээ нь адал явдалт, инээдмийн, драма]-ыг үзэх дуртай.",
    isProtected: true,
  },
  "What are you going to do this weekend?": {
    en: "This weekend, I plan to [Your plans, e.g., study, hang out with friends, go on a trip].",
    mn: "Энэ амралтын өдрүүдэд би [Таны төлөвлөгөө, жишээ нь суралцах, найз нөхөдтэйгээ уулзах, аялалд гарах]-ыг төлөвлөж байна.",
    isProtected: true,
  },
  "If I were to come to visit, what should I see?": {
    en: "If you visit Mongolia, you should definitely see [Place 1, Place 2]. These places offer beautiful scenery and unique cultural experiences.",
    mn: "Хэрэв та Монголд зочлох юм бол [Газар 1, Газар 2]-ыг үзэх хэрэгтэй. Эдгээр газрууд нь үзэсгэлэнт байгаль, өвөрмөц соёлын туршлагыг санал болгодог.",
    isProtected: true,
  },
  "What language are your classes in?": {
    en: "My classes are in Mongolian.",
    mn: "Миний хичээлүүд монгол хэл дээр явагддаг.",
    isProtected: true,
  },
  "What kind of people/customers came to your work?": {
    en: "As a [Your occupation], I typically interact with [Type of people, e.g., students, colleagues, clients].",
    mn: "[Таны мэргэжил]-ын хувьд би ихэвчлэн [Хүмүүсийн төрөл, жишээлбэл оюутан, хамтран ажиллагсад, үйлчлүүлэгчид]-тэй харилцдаг.",
    isProtected: true,
  },
  "What do you do when you are not busy?": {
    en: "When I'm not busy, I usually [Your activities, e.g., read books, watch movies, spend time with family and friends].",
    mn: "Завгүй байх үедээ би ихэвчлэн [Таны үйл ажиллагаа, жишээ нь ном унших, кино үзэх, гэр бүл найз нөхөдтэйгээ цагийг өнгөрөөх]-д цаг гаргадаг.",
    isProtected: true,
  },
  "Have you had a chance to travel before?": {
    en: "Yes, I've traveled to [Places you've visited, e.g., other provinces in Mongolia, neighboring countries].",
    mn: "Тийм ээ, би [Таны зочилсон газрууд, жишээ нь Монголын бусад аймаг, хөрш орнууд]-д аялж байсан.",
    isProtected: true,
  },
  "What will you do after our interview?": {
    en: "After the interview, I'll probably [Your plans, e.g., study, relax, go out with friends].",
    mn: "Ярилцлагын дараа би магадгүй [Таны төлөвлөгөө, жишээ нь суралцах, амрах, найз нөхөдтэйгээ гарах]-болно.",
    isProtected: true,
  },
  "Do you have exams this week?": {
    en: "Yes, I have an exam in [Subject] on [Date].",
    mn: "Тийм ээ, надад [Сэдэв]-ээс [Огноо]-нд шалгалт байна.",
    isProtected: true,
  },
  "Is it the end-semester exam or midterm exam?": {
    en: "It's a [End-semester/midterm] exam.",
    mn: "Энэ бол [Семестр төгсөх/дунд шалгалт] юм.",
    isProtected: true,
  },
  "Can you tell me about your country?": {
    en: "Mongolia is a landlocked country in East Asia. It's known for its vast grasslands, nomadic culture, and stunning natural beauty.",
    mn: "Монгол улс бол Зүүн Азийн эх газраас тусгаарлагдсан улс юм. Энэ нь өргөн уудам тал хээр, нүүдэлчин соёл, гайхамшигтай байгалийн үзэсгэлэнт байдлаараа алдартай.",
    isProtected: true,
  },
  "Can you tell me about your hometown?": {
    en: "I'm from [Your hometown]. It's a [Size and description of your hometown, e.g., small town, big city, historical, modern].",
    mn: "Би [Таны төрсөн нутаг]-аас гаралтай. Энэ бол [Таны төрсөн нутгийн хэмжээ, тодорхойлолт, жишээ нь жижиг хот, том хот, түүхэн, орчин үеийн].",
    isProtected: true,
  },
  "Can you cook?": {
    en: "Yes, I can cook [Dishes you can cook, e.g., Mongolian food, international cuisine].",
    mn: "Тийм ээ, би [Таны чаддаг хоол, жишээ нь монгол хоол, олон улсын гал тогоо]-г чаддаг.",
    isProtected: true,
  },
  "How do you cook it?": {
    en: "To cook [Dish name], I [Steps involved in cooking].",
    mn: "[Хоолны нэр]-ийг хийхийн тулд би [Хоол хийх үйл явц]-ыг хийдэг.",
    isProtected: true,
  },
};

// Хамгаалагдсан асуултууд
const protectedQuestions = Object.keys(questions);

// Экспорт хийх
export { questions, protectedQuestions };
