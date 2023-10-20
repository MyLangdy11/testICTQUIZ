document.addEventListener("DOMContentLoaded", function() {
  const questions = [
    {
          question: "អ្វីទៅជាកុំព្យូទ័រ?",
            image: "null",
          options: ["កុំព្យូទ័រគឺជាម៉ាស៊ីនអេឡិចត្រូនិកដែលអាចបោះពុម្ពបាន និងអាចចាក់វីដេអូ រូបភាពជាដើម។","កុំព្យូទ័រគឺជាម៉ាស៊ីនដែលត្រូវការKeyboard Mouseដើម្បីដំណើរការ។","កុំព្យូទ័រគឺជាម៉ាស៊ីនអេឡិចត្រូនិក ដែលអាចបញ្ចូល គណនា រក្សាទុកទិន្នន័យ(ឯកសារ) និងបញ្ចេញព័ត៌មានមកក្រៅវិញ។","កុំព្យូទ័រគឺជាម៉ាស៊ីនដែលមានសារសំខាន់ជាងគេក្នុងជីវិតរស់នៅ។"],
          answer: 2,
                additionalInfo: "កុំព្យូទ័រគឺជាម៉ាស៊ីនអេឡិចត្រូនិក ដែលអាចបញ្ចូល គណនា រក្សាទុកទិន្នន័យ(ឯកសារ) និងបញ្ចេញព័ត៌មានមកក្រៅវិញ។ វាជាឧបករណ៍អេឡិចត្រូនិកសម្រាប់ធ្វើការជាមួយព័ត៌មាន។ អ្នកអាចប្រើកុំព្យូទ័រសម្រាប់បង្កើតឯកសារ ដូចជា សរសេរសំបុត្រ គូរគំនូរ គណនា សរសេរកូដកម្មវិធី ឌីហ្សាញផ្សេងៗ។ល។"
        },
      {
          question: "តើសមាសភាគសំខាន់ៗរបស់កុំព្យូទ័រមានប៉ុន្មាន?",
            image: "null",
          options: ["២","៣","៤","៦"],
          answer: 2,
               additionalInfo: "កុំព្យូទ័រផ្សំឡើងដោយសមាសភាគសំខាន់៤គឺ៖ ១.ធុងប្រព័ន្ធ(System Unit), ២.ម៉ូនីទ័រ(Monitor), ៣.ក្ដារចុច(Keyboard), ៤.កណ្ដុរ(Mouse)។"
        },
      {
          question: "ក្នុងចំណោមចម្លើយខាងក្រោម មួយណាដែលជាមុខងាររបស់ធុងប្រព័ន្ធ (System Unit)?",
            image: "null",
          options: ["បង្ហាញព័ត៌មានផ្សេងៗ ដែលកំពុងដំណើរការក្នុងកុំព្យូទ័រ","ជាឧបករណ៍បញ្ចូលទិន្នន័យ","ជាធុងដែលផ្ទុកនូវសមាសភាគសំខាន់ៗសម្រាប់ឱ្យប្រព័ន្ធដំណើរការបាន","ជាឧបករណ៍អនុញ្ញាត្តឱ្យយើងបញ្ជាព្រួញកណ្ដុរបាន"],
          answer: 2,
                additionalInfo: "ធុងប្រព័ន្ធ គឺជាធុងមួយដែលផ្ទុកនូវសមាសភាគសំខាន់ៗសម្រាប់ឱ្យប្រព័ន្ធកុំព្យូទ័រដំណើរការបាន។ សមាសភាគទាំងនោះមានដូចជា បន្ទះមេ(Motherboard) ខួរក្បាល(CPU) ថាសរឹង(Hard Drive) សតិ(RAM) កាតបន្ថែម(Expansion Card) ដ្រាយស៊ីឌីរ៉ូម(CD-ROM Drive)។ល។ សមាសភាគនេះវាដូចជាខួរក្បាលរបស់មនុស្ស ដែលមានតួនាទីយ៉ាងសំខាន់ក្នុងការគិត និងធ្វើឱ្យប្រព័ន្ធទាំងមូលដំណើរការបាន។"
        },
      {
          question: "ក្នុងចំណោមចម្លើយខាងក្រោម មួយណាដែលជាតួរនាទីរបស់កណ្ដុរ(Mouse)?",
            image: "null",
          options: ["បង្ហាញព័ត៌មានផ្សេងៗ ដែលកំពុងដំណើរការក្នុងកុំព្យូទ័រ","ជាឧបករណ៍បញ្ចូលទិន្នន័យ","ជាធុងដែលផ្ទុកនូវសមាសភាគសំខាន់ៗសម្រាប់ឱ្យប្រព័ន្ធដំណើរការបាន","ជាឧបករណ៍កាន់ដោយដៃ ដែលអនុញ្ញាតឱ្យយើងបញ្ជាព្រួញកណ្ដុរ ដែលស្ថិតលើអេក្រង់ ដើម្បីជ្រើសរើសរូបតំណាង ឬជ្រើសម៉ឺនុយណាមួយ។"],
          answer: 3,
                additionalInfo: "កណ្ដុរ(Mouse) ជាឧបករណ៍កាន់ដោយដៃ ដែលអនុញ្ញាតឱ្យយើងបញ្ជាព្រួញកណ្ដុរ ដែលស្ថិតលើអេក្រង់ ដើម្បីជ្រើសរើសរូបតំណាង ឬជ្រើសម៉ឺនុយណាមួយ។ វាត្រូវបានប្រើដោយភ្ជាប់ទៅនឹងធុងប្រព័ន្ធតាមរយៈច្រក(Port) PS/2 ឬUSB។"
        },
      {
          question: "ក្នុងចំណោមចម្លើយខាងក្រោម ចម្លើយមួយណាដែលជាមុខងាររបស់ម៉ូនីទ័រ(Monitor)?",
            image: "null",
          options: ["ជាឧបករណ៍បញ្ចូលទិន្នន័យ","ជាឧបករណ៍បង្ហាញព័ត៌មានដែលកំពុងដំណើរការក្នុងកុំព្យូទ័រ រាងដូចទូរទស្សន៍","ជាឧបករណ៍បញ្ជារព្រួញកណ្ដុរ","ជាឧបការផ្ទុក ដូចនឹងខួរក្បាលមនុស្ស"],
          answer: 1,
          additionalInfo: "ម៉ូនីទ័រ(Monitor) គឺជាឧបករណ៍មានរាងដូចទូរទស្សន៍ដែលមាននាទីសម្រាប់បង្ហាញព័ត៌មានផ្សេងៗ ដែលកំពុងដំណើរការលើកុំព្យូទ័រ។ វាត្រូវបានគេប្រើដោយភ្ជាប់ជាមួយនឹងធុងប្រព័ន្ធតាមរយៈច្រក(Port) VGA។"
        },
      {
              question: "តើកុំព្យូទ័រចែកចេញជាប៉ុន្មានផ្នែកសំខាន់ៗ?",
              image: "null",
              options: ["2", "4", "3", "5"],
              answer: 0,
              additionalInfo: "កុំព្យូទ័រចែកចេញជា ២ ផ្នែកសំខាន់គឺ ផ្នែកទន់(Software) និងផ្នែករឹង(Hardware)។ +ផ្នែករឹង(Hardware) ជាឧបករណ៍រូបសាស្រ្ដ ឬជាឧបករណ៍ផ្នែករឹងនៃកុំព្យូទ័រដែលយើងអាចមើលឃើញ និងប៉ះពាល់បាន។ Hardware មិនអាចដំណើរការបានទេប្រសិនបើគ្មានSoftware។ Hardwareមាន៖១ ឧបករណ៍បញ្ចូលព័ត៌មាន(Input Devices)៖ Mouse,Keyboard,Scanner, Touch pad, Touch panel,Joystick,OCR...។ ២ ឧបករណ៍បញ្ចេញព័ត៌មាន (Output Devices)៖ Monitor, Printer,Headphone,Speaker, Projector...។ ៣ System Unit មាន Motherboard, CPU, RAM, Power Supply, Floppy Disk, Disk Drive, Hard Disk, CD ROM, VGA Card, Sound Card...។ +ផ្នែកទន់(Software) ជាកម្មវិធីរបស់កុំព្យូទ័រ ហើយជាInstructions ដែលធ្វើឱ្យHardwareដំណើរការបាន យើងអាចមើលឃើញតែមិនអាចប៉ះពាល់បាន។ Softwareមាន២ប្រភេទធំៗគឺ ១ Operating System Software(OS): Window, Mac, Linux...។កុំព្យូទ័រនឹងមិនដំណើរការទេបើគ្មានOperating System Software។ ២ Application Software: ជាកម្មវិធីដែលជំនួយ តម្រូវការប្រើប្រាស់លើកុំព្យូទ័រដូចជា Ms.Office, OpenOffice, Photoshop, CorelDraw, Google Chrome, Telegram, Ms Edge...។"
            },
        {
              question: "អ្វីទៅជា Fan?",
              image: "null",
              options: ["គឺជាកង្ហាដូចជាHatari សម្រាប់ប្រើប្រាស់ពេលអាកាសធាតុក្ដៅ", "គឺជាឧបករណ៍សម្រាប់គាំទ្រក្នុងដំណើរការរបស់កុំព្យូទ័រ", "គឺជាកង្ហាដែលធ្វើឱ្យកុំព្យូទ័រត្រជាក់ ហើយធ្វើឱ្យកុំព្យូទ័រដំណើរការបានលឿន", "គឺជាកម្មវិធីទំនាក់ទំនងគ្នាក្នុងបណ្ដាញសង្គម"],
              answer: 2,
              additionalInfo: "Fan គឺជាកង្ហាដែលធ្វើឱ្យកុំព្យូទ័រត្រជាក់ ហើយធ្វើឱ្យកុំព្យូទ័រដំណើរការបានលឿន។ វាមានស្ទើរតែគ្រប់កុំព្យូទ័រ។ ជារឿយៗវាមានច្រើនប្រភេទណាស់ដូចជា Fanសម្រាប់CPU,សម្រាប់Power Supply, សម្រាប់VGA Card និងសម្រាប់Caseទាំងមូល។"
            },
        {
              question: "អ្វីទៅជាMotherboard ឬMain Board?",
              image: "https://m.media-amazon.com/images/I/61w7mxuedvL._AC_UF1000,1000_QL80_.jpg",
              options: ["បន្ទះដែលធ្វើឱ្យកុំព្យូទ័រត្រជាក់", "គឺជាផ្ទាំងសៀគ្វីធំមួយនៅក្នុង Computer ដែលជាធម្មតាវាបង្កើតបានជាកម្រាលនៃ System-Unint", "គឺជាបន្ទះជំនួយដែលធ្វើឱ្យកុំព្យូទ័រដំណើរការបានលឿនជាងមុន"],
              answer: 1,
              additionalInfo: "Motherboard គឺជាផ្ទាំងសៀគ្វីធំមួយនៅក្នុងកុំព្យូទ័រ ជាធម្មតាវាបង្កើតបានជាកម្រាលនៃSystem Unit។ គ្រប់សមាភាគElectronicទាំងអស់របស់កុំព្យូទ័រត្រូវបានដោតទៅនឹងMotherboard វាជាអ្នកនាំផ្លូវទិន្នន័យ។"
            },
        {
              question: "តើ Motherboard ឬMain Board ចែកចេញជាប៉ុន្មានផ្នែក?",
              image: "null",
              options: ["មានតែ១ផ្នែកគត់", "២", "៣", "៤"],
              answer: 1,
              additionalInfo: "Motherboard or Main Boardចែកចេញជា២គឺ Integrated System Board និង Non-integrated System Board។"
            },
        {
              question: "ចូរឱ្យឈ្មោះនៃឧបករណ៍៖",
              image: "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2017/09/cpu-upgrade.jpg",
              options: ["RAM", "Hard Disk Drive", "CD ROM", "CPU"],
              answer: 3,
              additionalInfo: "CPU (Central Processing Unit) វាដូចទៅនឹងខួរក្បាលកុំព្យូទ័រមួយ ដែលមាននាទីយ៉ាងសំខាន់ក្នុងការគ្រប់គ្រងរាល់ដំណើរការក្នុងកុំព្យូទ័រទាំងមូល។ វាជាអ្នកបញ្ជា គណនា និងត្រួតពិនិត្យនូវរាល់ដំណើរការចេញចូលនៃព័ត៌មានទាំងអស់។"
            },
        {
              question: "ចូរឱ្យឈ្មោះនៃឧបករណ៍៖",
              image: "https://media.product.which.co.uk/prod/images/original/f0437e5aa000-istock-89941559.jpg",
              options: ["CPU", "RAM", "VGA Card", "CPU Fan"],
              answer: 1,
              additionalInfo: "RAM (Random Access Memory) ជាសតិសម្រាប់រក្សា ឬចងចាំទិន្នន័យជាបណ្ដោះអាសន្ន វាដំណើរការតែពេលមានថាមពលអគ្គិសនីប៉ុណ្ណោះ ទិន្នន័យទាំងអស់នឹងបាត់បង់បើថាមពលអគ្គិសនីបានកាត់ផ្ដាច់។"
            },
        {
              question: "ចូរកំណត់ឈ្មោះរបស់ឧបករណ៍៖",
              image: "https://www.arcadexpress.com/5992-large_default/arcade-power-pro-arcade-power-supply-dual-switch-200w-5v-5v-12v-12v-20a.jpg",
              options: ["System Unit", "Sound Card", "Power Supply", "Projector"],
              answer: 2,
              additionalInfo: "Power Supply ឬដុំភ្លើង ជាឧបករណ៍សម្រាប់ផ្ដល់ថាមពលអគ្គិសនី ហើយវាបែងចែកថាមពលអគ្គិសនីទៅឱ្យសមាសភាគផ្សេងៗរបស់កុំព្យូទ័រ។ "
            },
        {
              question: "ឧបករណ៍ខាងក្រោមមួយណាដែលអាចផ្ទុកទិន្នន័យបានជាអចិន្រ្តៃយ៍?",
              image: "null",
              options: ["Hard disk", "CPU", "RAM", "null"],
              answer: 0,
              additionalInfo: "ឧបករណ៍ផ្ទុកទិន្នន័យជាអចិន្ត្រៃយ៍មានដូចជា៖ Flash, Hard disk, DVD, CD, SD-Card, Floppy disk, SSDជាដើម។"
            },
        {
              question: "ក្នុងចំណោមចម្លើយជ្រើសរើសខាងក្រោម ឧបករណ៍មួយណាដែលផ្ទុកទិន្នន័យបណ្ដោះអាសន្ន?",
              image: "null",
              options: ["Hard Disk", "RAM", "SSD", "Flash"],
              answer: 1,
              additionalInfo: "RAM (Random Access Memory) ជាឧបករណ៍ផ្ទុកទិន្នន័យបណ្ដោះអាសន្ន ទិន្នន័យនឹងត្រូវបានបង់នៅពេលថាមពលអគ្គិសនីត្រូវបានផ្ដាច់ ឬអស់ថ្ម ឬដាច់ភ្លើង។"
            },
        {
              question: "មួយណាជាចម្លើយត្រឹមត្រូវនៃពាក្យពេញរបស់ពាក្យ ICT?",
              image: "null",
              options: ["Information and Communication Technology", "International Communication Technology", "Internet and Computer Technology", "Interactive Computing Technology"],
              answer: 0,
              additionalInfo: "Information and Communication Technology (ICT): បច្ចេកវិទ្យា ព័ត៌មាន និងសារគមនាគមន៍ គឺជាបច្ចេកវិទ្យាដែលមានជំនាញច្បាស់លាស់ខាងការផ្លាស់ប្ដូរព័ត៌មានទៅវិញទៅមក ដែលសំដៅលើការប្រើប្រាស់បច្ចេកវិទ្យាឌីជីថលតាមរយៈឧបករណ៍អេឡិចត្រូនិកដែលអាចជួយឱ្យអង្គការ ស្ថាប័នមួយ មានលទ្ធភាពទទួលបាន/បញ្ជូនព័ត៌មានរហ័ស។ ឧបករណ៍បច្ចេកវិទ្យា ព័ត៌មាន និងសារគមនាគមន៍និយាយទៅលើផលិតផលដែលនឹងផ្ទុក ហើយយកមកប្រើប្រាស់វិញ រៀបចំ បញ្ជូន ឬទទួលព័ត៌មានតាមបែបអេឡិចត្រូនិក។"
            },
        {
              question: "តើបច្ចេកវិទ្យា ព័ត៌មាន និងសារគមនាគមន៍ចែកចេញជាប៉ុន្មាន?",
              image: "null",
              options: ["២", "៣", "៤", "៥"],
              answer: 0,
              additionalInfo: "បច្ចេកវិទ្យា ព័ត៌មាន និងសារគមនាគមន៍ចែកចេញជា២ គឺ - បច្ចេកវិទ្យាដែលផ្អែកលើកុំព្យូទ័រ៖ គឺជាអ្វីៗដែលអ្នកធ្វើនៅលើកុំព្យូទ័រ ដែលអ្នកប្រើនៅការិយាល័យ ឬនៅផ្ទះ។ - បច្ចេកវិទ្យាទំនាក់ទំនងឌីជីថល៖ គឺជាបច្ចេកវិទ្យាដែលថ្មី និងរីកលូតលាស់បានលឿនដែលអនុញ្ញាតឱ្យមនុស្ស និងអង្គភាពធ្វើទំនាក់ទំនង និងចែករំលែកព័ត៌មានតាមបែបឌីជីថល។"
            },
        {
              question: "ចំណោមភាសាProgrammingខាងក្រោម ភាសាមួយណាដែលប្រើប្រាស់ជាចម្បងសម្រាប់ការអភិវឌ្ឍន៍គេហទំព័រ(Web Development)?",
              image: "null",
              options: ["Python", "Java", "HTML", "C++"],
              answer: 2,
              additionalInfo: "HTML វាមកពីពាក្យពេញថា Hyper Text Markup Language ដែលជាភាសាដំបូង និងជាមូលដ្ឋានគ្រឹះសម្រាប់បង្កើតវេបសាយ។"
            },
        {
              question: "តើមួយណាដែលគេចាត់ទុកថាជា ខួរក្បាល របស់កុំព្យូទ័រ?",
              image: "null",
              options: ["CPU", "RAM", "Hard Drive", "Monitor"],
              answer: 0,
              additionalInfo: "គឺជាផ្នែកដ៍សំខាន់មួយរបស់ Computerដែលមានតួនាទីក្នុងការគិតដោះស្រាយនូវរាល់បញ្ហាផ្សេងៗរបស់ Computerដែលគេហៅវានៅក្នុងភាសាកុំព្យូទ័រថាជាខួក្បាលរបស់Computer។"
            },
        {
              question: "តើអក្សរកាត់ RAM តំណាងឱ្យអ្វី?",
              image: "null",
              options: ["Read-Only Memory", "Random Access Memory", "Random Allocation Module", "Remote Access Machine"],
              answer: 1,
              additionalInfo: "RAM (Random Access Memory) វាជាសតិ ដែលដំណើរការជាប្រចាំនៅក្នុងកុំព្យូទ័រ វាផ្ទុកទិន្នន័យផ្សេងៗដែលកំពុងដំណើរការលើកុំព្យូទ័របានបណ្ដោះអាសន្ន នៅពេលកុំព្យូទ័រត្រូវបានបិទ ឬគ្មានចន្តរអគ្គិសនីទិន្នន័យនោះត្រូវបានបាត់បង់ចេញពីRAM។"
            },
        {
              question: "តើអ្វីជាមុខងារចម្បងនៃប្រព័ន្ធប្រតិបត្តិការ (Operating System)?",
              image: "null",
              options: ["អនុវត្តកម្មវិធី(Excecute programs", "គ្រប់គ្រងធនធានផ្នែករឹង និងផ្នែកទន់", "បង្ហាញរូបភាពលើអេក្រង់", "រក្សាទុក និងទាញយកទិន្នន័័យ"],
              answer: 1,
              additionalInfo: "OS (Operating System)  ជា Software program ដែលមានសមត្ថភាពអោយកុំព្យូទ័រ Hardware មានទំនាក់ទំនង និងប្រតិបត្តិជាមួយ Computer Software បើគ្មាន Computer Operating System Computer និង Software Program នឹងគ្មានប្រយោជន៍។"
            },
        {
              question: "ក្នុងចំណោមឧបករណ៍ខាងក្រោម ឧបករណ៍មួយណាដែលជាឧបករណ៍បញ្ចូល(Input Device)?",
              image: "null",
              options: ["Printer", "Monitor", "Keyboard", "Speaker"],
              answer: 2,
              additionalInfo: "Input Device: គឺសំដៅទៅលើឧបករណ៍ដែលមានតួនាទីសំរាប់ញ្ចូលពត័មាន ឬទិន្នន័យចូលទៅក្នុងកុំព្យូទ័រ។ Input Device មានដូចជា  Keyboard, Scanner, Phone, Camera, Mouse, Microphone….."
            },
        {
              question: "តើមួយណាខាងក្រោមមិនមែនជាឧទាហរណ៍នៃឧបករណ៍បញ្ចេញ(Output Device)?",
              image: "null",
              options: ["Printer", "Speaker", "Mouse", "Monitor"],
              answer: 2,
              additionalInfo: "មិនមែនឧបករណ៍បញ្ចេញ(Output Device) វាគឺជាឧបករណ៍បញ្ចូល(Input Device)។ Mouse គឺជាឧបករណ៍បញ្ចូល(Input Device) គេប្រើវាដើម្បីបញ្ជាព្រួញកណ្ដុរដែលបង្ហាញនៅលើអេក្រង់ដើម្បីធ្វើការងារអ្វីមួយដែលចង់បាន/ជ្រើសរើស។"
            },
        {
              question: "តើអក្សរកាត់ LAN តំណាងឱ្យអ្វី?",
              image: "null",
              options: ["Large Area Network", "Local Area Network", "Long Access Node", "Low-latency Audio Network"],
              answer: 1,
              additionalInfo: "បណ្តាញ LAN តំណាងឱ្យបណ្តាញតំបន់។ វាជាបណ្តាញតូចមួយ (បើប្រៀបធៀបនឹង WAN ) គ្របដណ្តប់លើតំបន់តូចៗដូចជាបន្ទប់ការិយាល័យ អគារជាដើម។ ល។"
            },
        {
              question: "តើមួយណាខាងក្រោមជាឧទាហរណ៍នៃ Secondary storage?",
              image: "null",
              options: ["RAM", "CPU", "Flash Drive", "Cache Memory"],
              answer: 2,
              additionalInfo: "Secondary Storage គឺសំដៅលើឧបករណ៍ផ្ទុកទិន្នន័យមិនងាយនឹងបាត់បង់ ដែលគេប្រើដើម្បីរក្សាទុកទិន្នន័យ និងព័ត៌មានរយៈពេលយូរ។ វាមិនបាត់បង់ទិន្នន័យឬព័ត៌មាននោះទេទោះបីជាកុំព្យូទ័រត្រូវបានបិទក៏ដោយ។ ជាទូទៅSecondary storageមាន Hard Disk Drive(HDDs), Solid-State Drive(SSDs),ឌិសអុបទិច(CDs and DVDs)និង USB flash drive។"
            },
        {
              question: "តើមួយណាខាងក្រោមមិនមែនជាកម្មវិធីរុករកតាមអ៊ីនធឺណិត(Web Browser)?",
              image: "null",
              options: ["Chrome", "Firefox", "Excel", "Edge"],
              answer: 2,
              additionalInfo: "Excelគឺជាកម្មវិធីសៀវភៅបញ្ជីដ៏ពេញនិយមបំផុត ដែលបង្កើតដោយក្រុមហ៊ុន Microsoft។ លក្ខណៈពិសេសរបស់វារួមមាន គណនាដោយប្រើប្រាស់រូបមន្ត សង់តារាង គូសក្រាហ្វិក គ្រប់គ្រងទិន្នន័យ ធ្វើរបាយការណ៍ជាដើម។ ដូចនេះវាមិនមែនជាកម្មវិធីរុករកអ៊ីនធឺណិតនោះទេ។ និយមន័យរបស់កម្មវិធីរុករកអ៊ីនធឺណិតគឺជាកម្មវិធីសម្រាប់បើកគេហទំព័រផ្សេងៗនៅលើអ៊ីនធឺណិត គេប្រើវាដើម្បីធ្វើការ រកព័ត៌មាន ឯកសារនានា ដែលមានលើអ៊ីនធឺណិត។"
            },
        {
              question: "តើមួយណាជាភាសាសរសេរកម្មវិធី?",
              image: "null",
              options: ["HTML", "JPEG", "MP3", "PDF"],
              answer: 0,
              additionalInfo: "ភាសាសរសេរកម្មវិធីគឺជាភាសាផ្លូវការដែលប្រើសម្រាប់សរសេរណែនាំ ឬកូដដែលអាចឱ្យកុំព្យូទ័រប្រតិបត្តិការបាន។ វាគឺជាសំណុំនៃច្បាប់ និងវាក្យសម្ព័ន្ធដែលអាចឱ្យអ្នកសរសេរកម្មវធីអាចទំនាក់ទំនងជាមួយកុំព្យូទ័រ និងផ្ដល់ការណែនាំ។"
            },
        {
              question: "តើកម្មវិធីកំចាត់មេរោគមានមុខងារអ្វីខ្លះ?",
              image: "null",
              options: ["ដើម្បីការពារប្រឆាំងនឹងកម្មវិធីព្យាបាទ", "ដើម្បីបង្កើតការបម្រុងទុកឯកសារ", "ដើម្បីគ្រប់គ្រងធនធានប្រព័ន្ធ", "ដើម្បីកែលម្អការតភ្ជាប់បណ្តាញ"],
              answer: 0,
              additionalInfo: "កម្មវិធីកម្ចាត់មេរោគគឺជាកម្មវិធីមួយដែលអាចជួយឱ្យឧបករណ៍/កុំព្យូទ័ររបស់យើងការពារពីមេរោគ  វាត្រូវបានគេស្គាល់ថាជាកម្មវិធីប្រឆាំងនឹងមេរោគ គេរចនាឡើងដើម្បីស្វែងរក ការពារ និងលុបកម្មវិធីព្យាបាទ(មេរោគ) ចេញពីប្រព័ន្ធកុំព្យូទ័រ។ វាជាឧបករណ៍សំខាន់សម្រាប់ការពារកុំព្យូទ័រ និងឧបករណ៍ផ្សេងទៀតពីការគំរាមកំហែងជាច្រើនប្រភេទ រួមទាំងមេរោគ ពពួក Worm Trojans Spyware Adware ransomware និងទម្រង់មេរោគផ្សេងៗទៀត។"
            },
        {
              question: "ចូរកំណត់ឈ្មោះកម្មវិធីតាមរយៈរូបភាព៖",
              image: "https://tech-ish.com/wp-content/uploads/2020/06/Microsoft-Edge-Logo.png",
              options: ["Google Chrome", "Microsoft Edge", "Firefox", "Opera"],
              answer: 1,
              additionalInfo: "នេះគឺជារូបតំណាង(Icon)របស់កម្មវិធី Microsoft Edge។ វាជាកម្មវិធីរុករកអ៊ីនធឺណិតដ៏ពេញនិយមមួយ ដែលបង្កើតឡើងដោយក្រុមហ៊ុន Microsoft។"
            },
        {
              question: "ចូរកំណត់ឈ្មោះកម្មវិធីតាមរយៈរូបតំណាង",
              image: "https://yt3.googleusercontent.com/7Qy-xiYrM2DHUEVFTBkok5ei6n_qEnH9XRwBECZnsl_E02VxrLDYcU7svibdYL1YYs9sZKe6KA=s900-c-k-c0x00ffffff-no-rj",
              options: ["GPS", "Google Chrome", "Google Meet", "Microsoft Edge"],
              answer: 1,
              additionalInfo: "វាជារូបតំណាង(Icon)នៃកម្មវិធី Google Chrome។ វាជាកម្មវិធីរុករកអ៊ីនធឺណិតដែលពេញនិយមបំផុត ដែលបង្កើតដោយក្រុមហ៊ុនGoogle។"
            },
        {
              question: "ចូរកំណត់ឈ្មោះកម្មវិធីតាមរយៈរូបតំណាង៖",
              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/1200px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png",
              options: ["Google Map", "Microsoft Word", "Microsoft Teams", "Google Meet"],
              answer: 2,
              additionalInfo: "វាជារូបតំណាងរបស់កម្មវិធី Microsoft Teams ។ វាជាកម្មវិធីប្រជុំតាមរយៈអនឡាញដ៏ពេញនិយមបំផុតមួយ។ កម្មវិធីនេះត្រូវបានបង្កើតឡើងដោយក្រុមហ៊ុនMicrosoft។"
            },
        {
              question: "ចូរកំណត់ឈ្មោះរូបតំណាង៖",
              image: "https://developer.android.com/static/distribute/images/heroes/google-play-hero.svg",
              options: ["Google Chrome", "Microsoft Teams", "Google Meet", "Google Play"],
              answer: 3,
              additionalInfo: "នេះជារូបតំណាងកម្មវិធី Google Play (Play Store)។ វាជាហាងផ្ទុកកម្មវិធីជាច្រើនសម្រាប់អ្នកប្រើប្រព័ន្ធប្រតិបត្តិការអេនដ្រយ(Android)ចូលទៅទាញយកដោយសេរី/គិតថ្លៃ។ វាត្រូវបានគ្រប់គ្រងដោយក្រុមហ៊ុនយក្សGoogle។"
            },
        
      
    // {
    //   question: "",
    //   image: "null",
    //   options: ["", "", "", ""],
    //   answer: 0,
    //   additionalInfo: ""
    // },
    // Add more questions here...
  ];

  let currentQuestionIndex = 0;
  let currentQuestion;
  let timer;
  let selectedQuestions = [];
  let scoreCorrect = 0;
  let scoreIncorrect = 0;

  const questionElement = document.querySelector(".question");
  const optionsElement = document.querySelector(".options");
  const resultElement = document.getElementById("result");
  const additionalInfoElement = document.querySelector(".additional-info");
  const closeBtn = document.getElementById("close-btn");
  const timerElement = document.querySelector(".timer");
  const gameHistoryElement = document.querySelector(".game-history");
  const playAgainBtn = document.getElementById("play-again-btn");
  const exitButton=document.getElementById("exitButton");

  // Sound effects
  const correctSound = new Audio("sound/correct.mp3");
  const incorrectSound = new Audio("sound/incorrect.mp3");
  const timeisout=new Audio("sound/timeout.mp3");

  startGame();

  function startGame() {
    selectedQuestions = getRandomQuestions(10);
    currentQuestionIndex = 0;
    scoreCorrect = 0;
    scoreIncorrect = 0;
    showQuestion();
  }

  function getRandomQuestions(num) {
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    return shuffledQuestions.slice(0, num);
  }

  function showQuestion() {
    currentQuestion = selectedQuestions[currentQuestionIndex];
  
    questionElement.innerHTML = `
      <img src="${currentQuestion.image}" alt="">
      <p>${currentQuestion.question}</p>
    `;
  
    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
      const liElement = document.createElement("li");
      liElement.textContent = (index + 1) + ". " + option;
      liElement.addEventListener("click", () => {
        checkAnswer(index);
      });
      optionsElement.appendChild(liElement);
    });
  
    resetTimer();
    startTimer();
  }

  function checkAnswer(selectedIndex) {
    clearInterval(timer);

    const selectedOption = optionsElement.children[selectedIndex];

    if (selectedIndex === currentQuestion.answer) {
      selectedOption.classList.add("correct");
      resultElement.textContent = "ត្រឹមត្រូវ! ពូកែមែនទែន";
      resultElement.classList.add("correct");
      correctSound.play();
      showAdditionalInfo();
      scoreCorrect++;
    } else {
      const correctOption = optionsElement.children[currentQuestion.answer];
      resultElement.textContent = "មិនត្រឹមត្រូវទេ! ចម្លើយត្រឹមត្រូវគឺ: " + correctOption.textContent;
      resultElement.classList.add("incorrect");
      incorrectSound.play();
      showAdditionalInfo();
      scoreIncorrect++;
    }

    optionsElement.classList.add("disabled");
  }

  function showAdditionalInfo() {
    additionalInfoElement.style.display = "block";
    additionalInfoElement.innerHTML = `
      <h2>ពន្យល់បន្ថែម</h2>
      <p>${currentQuestion.additionalInfo}</p>
      <button id="close-info-btn">Close</button>
    `;

    const closeInfoBtn = document.getElementById("close-info-btn");
    closeInfoBtn.addEventListener("click", function() {
      additionalInfoElement.style.display = "none";
      resultElement.innerHTML = "";
      resultElement.classList.remove("correct", "incorrect");
      optionsElement.classList.remove("disabled");

      currentQuestionIndex++;
      if (currentQuestionIndex < selectedQuestions.length) {
        showQuestion();
      } else {
        endGame();
      }
    });
  }

  function startTimer() {
    let timeLeft = 60; // Change the time limit as needed
  
    const progressBar = document.querySelector(".progress-bar");
    progressBar.style.width = "100%";
  
    timer = setInterval(() => {
      timeLeft--;
      timerElement.textContent = timeLeft;
  
      const progressPercentage = (timeLeft / 60) * 100;
      progressBar.style.width = `${progressPercentage}%`;
      if (timeLeft<=4){
        timeisout.play();
      }
      if (timeLeft === 0) {
        clearInterval(timer);
        incorrectSound.play();
        showCorrectAnswer();
      }
    }, 1000);
  }
  
  function resetTimer() {
    timerElement.textContent = "60"; // Change the initial time limit as needed
    const progressBar = document.querySelector(".progress-bar");
    progressBar.style.width = "100%";
  }

  function showCorrectAnswer() {
    const correctOption = optionsElement.children[currentQuestion.answer];
    correctOption.classList.add("correct");
    resultElement.textContent = "អស់ពេលហើយ!";
    resultElement.classList.add("incorrect");
    showAdditionalInfo();
    scoreIncorrect++;
  }

  function endGame() {
    clearInterval(timer);
    questionElement.innerHTML = "";
    optionsElement.innerHTML = "";
    resultElement.innerHTML = "";
    additionalInfoElement.style.display = "none";
    timerElement.textContent = "";
  
    const numOfQuestions = selectedQuestions.length;
    const numOfCorrectAnswers = document.querySelectorAll(".correct").length;
    const numOfIncorrectAnswers = numOfQuestions - numOfCorrectAnswers;
    
    const percentCorrect = ((scoreCorrect / numOfQuestions) * 100).toFixed(2);
    const percentIncorrect = ((scoreIncorrect/ numOfQuestions) * 100).toFixed(2);
  
    document.getElementById("quiz-container").style.display = "none";
    document.querySelector(".game-history").style.display="block";
    gameHistoryElement.innerHTML = `
      <h2>Game History</h2>
      <p>ចំនួនសំណួរទាំងអស់: ${numOfQuestions}</p>
      <p>ចម្លើយត្រឹមត្រូវ: ${scoreCorrect} ស្មើនឹង ${percentCorrect}%</p>
      <p>ចម្លើយមិនត្រឹមត្រូវ: ${scoreIncorrect} ស្មើនឹង ${percentIncorrect}%</p>
    `;
  
    playAgainBtn.style.display = "block";
    exitButton.style.display="block";
  }


  playAgainBtn.addEventListener("click", function() {
    startGame();
    gameHistoryElement.innerHTML = "";
    playAgainBtn.style.display = "none";
    document.querySelector(".game-history").style.display="none";
    document.getElementById("quiz-container").style.display = "block";
  });
});
