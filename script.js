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
              additionalInfo: "Secondary Storage គឺសំដៅលើឧបករណ៍ផ្ទុកទិន្នន័យមិនងាយនឹងបាត់បង់ ដែលគេប្រើដើម្បីរក្សាទុកទិន្នន័យ និងព័ត៌មានរយៈពេលយូរ។ វាមិនបាត់បង់ទិន្នន័យឬព័ត៌មាននោះទេទោះបីជាកុំព្យូទ័រត្រូវបានបិទក៏ដោយ។ ជាទូទៅSecondary storageមាន Hard Disk Drive(HDDs), Solid-State Drive(SSDs),ឌីសអុបទិច(CDs and DVDs)និង USB flash drive។"
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
        {
                question: "តើមួយណាជាអង្គចងចាំកុំព្យូទ័រដែលរក្សាទុកទិន្នន័យ ទោះបីបិទថាមពលក៏ដោយ?",
                image: "https://decodethejargonkaran.weebly.com/uploads/5/5/9/1/55917979/610904.png?340",
                options: ["RAM", "ROM", "Cache", "SSD"],
                answer: 1,
                additionalInfo: "ROM Memory ឬក៏ត្រូវបានសម្គាល់ថា Read-Only Memoryគឺជាជាអង្គចងចាំរបស់កុំព្យូទ័រ ដែលផ្ទុកនូវឃ្លាបញ្ជារ (Instructions)ដូចជាផ្នែកអចិន្រៃយ៏ខ្លះៗរបស់ប្រព័ន្ធដំណើរការ វាត្រូវបានគេហៅថា Fimware ។ កុំព្យូទ័រ អាចអានឃ្លាបញ្ជានោះបាន តែមិនអាចកែប្រែទិន្នន័យនៅក្នុងនោះបានទេ ។វាអនុញ្ញាតតែការអានការស្វែងរក ។ទិន្នន័យដែលរក្សាទុកក្នុងអង្គចងចាំ ROM មិនអាចផ្លាស់ប្តូរ ឬកែប្រែបានទេ។"
              },
          {
                question: "តើមួយណាខាងក្រោមជាឧទាហរណ៍នៃសេវាកម្មផ្ទុកទិន្នន័យលើពពក (Cloud Storage​ Service)?",
                image: "null",
                options: ["Google Drive", "USB Flash Drive", "External Hard Drive", "DVD"],
                answer: 0,
                additionalInfo: "Google Drive ជាសេវាកម្មផ្ទុកទិន្នន័យ លើពពក ដែលក្រុមហ៊ុន Google បានផ្តល់ជូន ដោយឥតគិតថ្លៃ ដោយវាមានមកស្រាប់នៅពេលដែលយើងបង្កើតគណនី Gmail ឬអាចនិយាយបានថា Google Drive ជាកន្លែងដែលយើងអាចយក ឯកសារទៅទុក លើពពក ឬ ទាញយកវិញ ឬក៏ចែករំលែកទៅកាន់អ្នកដទៃក៏បានដែរ។"
              },
          {
                question: "តើមួយណាជាឧទាហរណ៍នៃប្រព័ន្ធប្រតិបត្តិការ?",
                image: "null",
                options: ["Microsoft Office", "Google Chrome", "Windows 10", "Adobe Photoshop"],
                answer: 2,
                additionalInfo: "ប្រព័ន្ធប្រតិបត្តិការ (OS)  ជាពាក្យកាត់នៃឃ្លាថា Operating System ដែលវាគឺជា​អ្នកសម្របស្រួលរាល់ប្រតិបត្តិការទាំងអស់នៅក្នុង Computer ជាមួយនិង Hardware មិនតែប៉ុណ្ណោះវាក៏ជាអ្នកបកប្រែពីភាសា Programming ទៅជាភាសាម៉ាស៊ីន(Binary Code) ផងដែរ។"
              },
          {
                question: "តើរ៉ោតទ័រ(Router)នៅក្នុងបណ្តាញកុំព្យូទ័រមានមុខងារអ្វីខ្លះ?",
                image: "https://static.javatpoint.com/tutorial/computer-network/images/router2.png",
                options: ["ភ្ជាប់ឧបករណ៍នៅក្នុងបណ្តាញមូលដ្ឋាន", "អនុញ្ញាតឱ្យចូលប្រើអ៊ីនធឺណិត", "គ្រប់គ្រងសុវត្ថិភាពបណ្តាញ", "ទាំងអស់ខាងលើ"],
                answer: 3,
                additionalInfo: "Router គឺជាឧបករណ៍បណ្តាញ (network) សម្រាប់ធ្វើការភ្ជាប់ឧបករណ៍ប្រើប្រាស់មួយទៅកាន់មួយទៀតនិងមានមុខបញ្ជូនទិន្នន័យទៅកាន់អ៊ីនធឺណិត ហើយវាអាចអោយអ្នកប្រើប្រាស់អ៊ីនធឺណិតដែលបានផ្តល់ដោយក្រុមហ៊ុនអ៊ីនធឺណិត។"
              },
          {
                question: "តើមួយណាជាឧទាហរណ៍នៃទម្រង់ឯកសារសម្រាប់រូបភាព (file format for images)?",
                image: "null",
                options: ["MP3", "PDF", "JPEG", "TXT"],
                answer: 2,
                additionalInfo: "ទម្រង់ឯកសាររូបភាព( File Formate for images)គឺជាទម្រង់ស្តង់ដារដែលប្រើដើម្បីរក្សាទុក និងអ៊ិនកូដរូបភាពឌីជីថល។ ទ្រង់ទ្រាយឯកសារនីមួយៗមានលក្ខណៈផ្ទាល់ខ្លួនរបស់វា រួមទាំងក្បួនដោះស្រាយការបង្ហាប់ ជម្រៅពណ៌ ការគាំទ្រតម្លាភាព និងលក្ខណៈពិសេសផ្សេងទៀត។ នេះគឺជាទម្រង់ឯកសាររូបភាពដែលប្រើជាទូទៅមួយចំនួន៖ JPEG, PNG,GIF,SVG,PSD,BMPជាដើម។"
              },
          {
                question: "តើមួយណាជាឧទាហរណ៍នៃវេទិកាប្រព័ន្ធផ្សព្វផ្សាយសង្គម(Social Media App)?",
                image: "null",
                options: ["Microsoft PowerPoint", "Instagram", "Adobe Photoshop", "Google Docs"],
                answer: 1,
                additionalInfo: "កម្មវិធីប្រព័ន្ធផ្សព្វផ្សាយសង្គមគឺជាកម្មវិធីដែលត្រូវបានរចនាឡើងដើម្បីជួយសម្រួលដល់អន្តរកម្មសង្គម ការទំនាក់ទំនង ការចែករំលែកខ្លឹមសារ និងបណ្តាញរវាងអ្នកប្រើប្រាស់។ កម្មវិធីទាំងនេះផ្តល់វេទិកាសម្រាប់បុគ្គល សហគមន៍ និងអង្គការដើម្បីភ្ជាប់ ចែករំលែកព័ត៌មាន និងចូលរួមជាមួយអ្នកដទៃស្ទើរតែទាំងអស់។ កម្មវិធីប្រព័ន្ធផ្សព្វផ្សាយសង្គមត្រូវបានចូលប្រើជាធម្មតាតាមរយៈស្មាតហ្វូន ថេប្លេត ឬកុំព្យូទ័រ ហើយពួកវាផ្តល់ជូននូវមុខងារផ្សេងៗដើម្បីបង្កើនបទពិសោធន៍អ្នកប្រើប្រាស់ និងសម្រួលដល់អន្តរកម្ម។ឧទាហរណ៍ដ៏ពេញនិយមមួយចំនួននៃកម្មវិធីប្រព័ន្ធផ្សព្វផ្សាយសង្គមរួមមាន: Facebook, Instagram, Twitter, LinkedIn, SnapChat,TikTok, Pinterest, WhatsAppជាដើម។"
              },
          {
                question: "តើមួយណាខាងក្រោមគឺជាបច្ចេកវិទ្យាទំនាក់ទំនងឥតខ្សែដែលប្រើជាទូទៅសម្រាប់ការផ្លាស់ប្តូរទិន្នន័យក្នុងរយៈពេលខ្លី?",
                image: "null",
                options: ["Bluetooth", "Ethernet", "USB", "HDMI"],
                answer: 0,
                additionalInfo: "ប៊្លូធូសគឺជាបច្ចេកវិទ្យាទំនាក់ទំនងឥតខ្សែដែលអនុញ្ញាតឱ្យឧបករណ៍ភ្ជាប់ និងផ្លាស់ប្តូរទិន្នន័យក្នុងចម្ងាយខ្លី។ វាអនុញ្ញាតការផ្ទេរទិន្នន័យឥតខ្សែរវាងឧបករណ៍ដូចជា ស្មាតហ្វូន ថេប្លេត កុំព្យូទ័រ កាស អូប៉ាល័រ ក្តារចុច និងឧបករណ៍អេឡិចត្រូនិកជាច្រើនទៀត។ វាមានលក្ខណៈពិសេស ការតភ្ជាប់ឥតខ្សែ ការទំនាក់ទំនងរយៈពេលខ្លី(អាចភ្ជាប់ឧបករណ៍បានរយៈចម្ងាយប្រហែល១០០ម៉ែត្រចុះក្រោម) ការប្រើប្រាស់ថាមពលទាប (សន្សំសំចៃថាមពលបើប្រៀបធៀបទៅនឹងបច្ចេកវិទ្យាទំនាក់ទំនងឥតខ្សែផ្សេងទៀត) ការផ្គូរផ្គង និងសុវត្ថិភាព ការភ្ជាប់ឧបករណ៍ច្រើនជាដើម។"
              },
          {
                question: "តើមួយណាជាឧទាហរណ៍នៃកម្មវិធីធ្វើបទបង្ហាញ?",
                image: "null",
                options: ["Adobe Photoshop", "Microsoft PowerPoint", "Google Chrome ", "Window Media Player"],
                answer: 1,
                additionalInfo: "កម្មវិធីធ្វើបទបង្ហាញ ត្រូវបានគេស្គាល់ថាជាកម្មវិធីក្រាហ្វិកបទបង្ហាញ ឬកម្មវិធីបញ្ចាំងស្លាយ គឺជាកម្មវិធីកុំព្យូទ័រដែលប្រើដើម្បីបង្កើត និងបញ្ជូនបទបង្ហាញដែលមើលឃើញ។ វាអនុញ្ញាតឱ្យអ្នកប្រើបញ្ចូលគ្នានូវអត្ថបទ រូបភាព ក្រាហ្វិក និងធាតុពហុមេឌៀ ដើម្បីបង្កើតស្លាយដែលអាចបង្ហាញតាមលំដាប់លំដោយ។ កម្មវិធីធ្វើបទបង្ហាញផ្តល់នូវឧបករណ៍ និងលក្ខណៈពិសេសដើម្បីបង្កើនភាពទាក់ទាញដែលមើលឃើញ និងប្រសិទ្ធភាពនៃបទបង្ហាញ។ លក្ខណៈពិសេស និងសមត្ថភាពសំខាន់ៗមួយចំនួនរបស់កម្មវិធីធ្វើបទបង្ហាញមាន ការបង្កើត និងកែសម្រួលស្លាយ, Slide Transition and Animation(អនុញ្ញាតឱ្យអ្នកប្រើកំណត់បែបផែននៃការផ្លាស់ប្ដូររវាងស្លាយ ដូចជា fades, wipes ឬ slides។ មុខងារគំនូរជីវចល អាចឱ្យចលនា ដើម្បីបន្ថែមចំណាប់អារម្មណ៍ដែលមើលឃើញ និងរំលេចព័ត៌មានសំខាន់ៗ) គំរូ និងស្បែក(មានមកស្រាប់នូវគំរូជាច្រើន ដែលរូបរាងទាំងនោះបានរចនាជាមុន។ វាជួយសន្សំសំចៃពេលវេលា និងជួយអ្នកប្រើប្រាស់បង្កើតបទបង្ហាញដែលមើលទៅមានលក្ខណៈវិជ្ជាជីវផងដែរ។) អន្តរកម្ម(កម្មវិធីបទបង្ហាញអាចគាំទ្រធាតុអន្តរកម្ម ដូចជាតំណតំបន់ដែលអាចចុចបាន និងកម្រងសំណួរ ឬការស្ទង់មតិ។ឧទាហរណ៍ពេញនិយមនៃកម្មវិធីបង្ហាញរួមមាន Microsoft PowerPoint, Apple Keynote, Google Slides និង Prezi ។"
              },
          {
                  question: "តើអ្វីជាគោលបំណងនៃប្រព័ន្ធគ្រប់គ្រងមូលដ្ឋានទិន្នន័យ (DBMS)?",
                  image: "null",
                  options: ["បង្កើត និងកែសម្រួលរូបភាព និងក្រាហ្វិក", "ដើម្បីរក្សាទុក រៀបចំ និងគ្រប់គ្រងទិន្នន័យដ៏ធំ", "ដើម្បីភ្ជាប់អ៊ីនធឺណិត", "ដើម្បីដំណើរការ និងវិភាគទិន្នន័យជាលេខ"],
                  answer: 1,
                  additionalInfo: "DBMS (Database Management System) វាគឺជាប្រព័ន្ធកម្មវិធីដែលអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់កំណត់ បង្កើត រៀបចំ និងគ្រប់គ្រងមូលដ្ឋានទិន្នន័យ។ DBMS ផ្តល់នូវចំណុចប្រទាក់សម្រាប់អន្តរកម្មជាមួយមូលដ្ឋានទិន្នន័យ និងអនុវត្តមុខងារផ្សេងៗដូចជាការផ្ទុកទិន្នន័យ ការទាញយកទិន្នន័យ ការរៀបចំទិន្នន័យ និងសុវត្ថិភាពទិន្នន័យ។ឧទាហរណ៍ដ៏ពេញនិយមមួយចំនួននៃ DBMS រួមមាន Oracle, MySQL, Microsoft SQL Server និង PostgreSQL ។"
                },
            {
                  question: "តើមួយណាខាងក្រោមជាឧទាហរណ៍នៃឧបករណ៍ផ្ទុកទិន្នន័យ?",
                  image: "null",
                  options: ["Keyboard", "USB Flash Drive", "Mouse", "Printer"],
                  answer: 1,
                  additionalInfo: "ឧបករណ៍ផ្ទុកទិន្នន័យគឺជាសមាសធាតុផ្នែករឹង ឬឧបករណ៍ដែលត្រូវបានប្រើដើម្បីរក្សាទុកទិន្នន័យឌីជីថល។ វាត្រូវបានរចនាឡើងដើម្បីរក្សាទុកទិន្នន័យសម្រាប់ការទាញយក និងប្រើប្រាស់នៅពេលក្រោយ។ ឧបករណ៍ផ្ទុកទិន្នន័យមានទម្រង់ និងសមត្ថភាពផ្សេងៗគ្នា ចាប់ពីឧបករណ៍ចល័តខ្នាតតូច រហូតដល់ប្រព័ន្ធផ្ទុកសហគ្រាសខ្នាតធំ។ ឧបករណ៍ផ្ទុកទិន្នន័យមួយចំនួនមាន៖ Hard Disk Drive(HDD), Solid-State Drive(SSD), USB Flash Drive,Memory Card, Optical Discs(CDs=Compact Discs), DVDs=Digital Versatile Discs),Magnetic Tapeជាដើម។"
                },
            {
                  question: "តើមួយណាខាងក្រោមជាឧទាហរណ៍នៃឧបករណ៍បញ្ចូល(Input Device)?",
                  image: "null",
                  options: ["Scanner", "Printer", "Projector", "Speaker"],
                  answer: 0,
                  additionalInfo: "ម៉ាស៊ីនស្កេន(Scanner) ត្រូវបានចាត់ទុកថាជាឧបករណ៍បញ្ចូល(Input Device)។ វាគឺជាឧបករណ៍ដែលអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់បំប្លែងឯកសាររូបវ័ន្ត រូបភាព ឬវត្ថុទៅជាទម្រង់ឌីជីថល ដែលបន្ទាប់មកអាចត្រូវបានរក្សាទុក កែសម្រួល ឬបញ្ជូននៅលើកុំព្យូទ័រ។ ម៉ាស៊ីនស្កេនធ្វើការដោយប្រើបច្ចេកវិទ្យាអុបទិក(Optical Technology) ដើម្បីចាប់យករូបភាពឌីជីថលនៃឯកសារ ឬវត្ថុដែលកំពុងស្កេន។នៅពេលដែលឯកសារ ឬរូបភាពត្រូវបានដាក់នៅលើផ្ទៃរាបស្មើរបស់ម៉ាស៊ីនស្កេន ឬបញ្ចូលតាមរយៈឧបករណ៍បញ្ចូលឯកសារដោយស្វ័យប្រវត្តិ (ADF) ម៉ាស៊ីនស្កេនចាប់យកខ្លឹមសារ និងបង្កើតតំណាងឌីជីថលរបស់វា។ តំណាងឌីជីថលនេះអាចត្រូវបានរក្សាទុកជាឯកសាររូបភាពដូចជា JPEG ឬ PNG ឬបំប្លែងទៅជាអត្ថបទដែលអាចកែសម្រួលបានដោយប្រើបច្ចេកវិទ្យា Optical Character Recognition (OCR) ។"
                },
            {
                  question: "តើមួយណាជាឧទាហរណ៍នៃកម្មវិធីពហុមេឌៀ?",
                  image: "null",
                  options: ["Microsoft Word", "Photoshop", "Windows Media Player", "Microsoft Powerpoint"],
                  answer: 2,
                  additionalInfo: "កម្មវិធីពហុមេឌៀ សំដៅលើកម្មវិធីកុំព្យូទ័រ ឬកម្មវិធីដែលត្រូវបានរចនាឡើងដើម្បីបង្កើត កែសម្រួល រៀបចំ ឬចាក់មាតិកាពហុព័ត៌មាន។ មាតិកាពហុមេឌៀជាធម្មតារួមបញ្ចូលការបញ្ចូលគ្នានៃអត្ថបទ ក្រាហ្វិក អូឌីយ៉ូ វីដេអូ និងធាតុអន្តរកម្ម។កម្មវិធីពហុមេឌៀអាចឱ្យអ្នកប្រើប្រាស់ធ្វើការជាមួយប្រភេទមេឌៀផ្សេងៗគ្នា និងបញ្ចូលពួកវាទៅក្នុងបទពិសោធន៍ដ៏ស្អិតរមួត និងអន្តរកម្ម។ នេះគឺជាឧទាហរណ៍មួយចំនួននៃកម្មវិធីពហុព័ត៌មាន៖Video Editing Software, Audio Editing Software,Graphic Design Software, Presentation Software,Animation Software, Multimedia Authoring Tools, Media Players(VLC Media Player, Windows Media Player, and iTunes។"
                },
            {
                  question: "តើមួយណាជាឧទាហរណ៍នៃបច្ចេកវិទ្យាទូរគមនាគមន៍?",
                  image: "null",
                  options: ["Wi-Fi", "Microsoft Excel", "Adobe Photoshop", "USB"],
                  answer: 0,
                  additionalInfo: "Wi-Fi មកពីពាក្យ Wireless Fidelity គឺជាបច្ចេកវិទ្យាបណ្តាញឥតខ្សែដែលអនុញ្ញាតឱ្យឧបករណ៍ភ្ជាប់អ៊ីនធឺណិត ឬទំនាក់ទំនងគ្នាទៅវិញទៅមកដោយមិនចាំបាច់មានការតភ្ជាប់ខ្សែ។ វាអនុញ្ញាតឱ្យឧបករណ៍ដូចជា ស្មាតហ្វូន កុំព្យូទ័រយួរដៃ ថេប្លេត និងឧបករណ៍ផ្ទះឆ្លាតវៃ ដើម្បីភ្ជាប់អ៊ីនធឺណិតដោយឥតខ្សែ និងចូលប្រើសេវាកម្មអនឡាញ រុករកគេហទំព័រ ផ្ញើអ៊ីមែល ស្ទ្រីមមេឌៀ និងអ្វីៗជាច្រើនទៀត។"
                },
            {
                  question: "តើមួយណាខាងក្រោមជាឧទាហរណ៍នៃឧបករណ៍បញ្ចេញ(Output Device)?",
                  image: "null",
                  options: ["Keyboard", "Mouse", "Monitor", "Scanner"],
                  answer: 2,
                  additionalInfo: "ម៉ូនីទ័រគឺជាឧបករណ៍បញ្ចេញ(Output Device)លទ្ធផលដែលប្រើក្នុងកុំព្យូទ័រដែលបង្ហាញលទ្ធផលដែលមើលឃើញពីកុំព្យូទ័រ ឬឧបករណ៍អេឡិចត្រូនិកផ្សេងទៀត។ម៉ូនីទ័រទទួលបានលទ្ធផលដែលមើលឃើញពីកាតក្រាហ្វិក ឬអាដាប់ទ័រវីដេអូរបស់កុំព្យូទ័រតាមរយៈការភ្ជាប់ខ្សែដូចជា HDMI, DisplayPort, DVI ឬ VGA ។ កាតក្រាហ្វិកដំណើរការទិន្នន័យ ហើយបញ្ជូនវាទៅម៉ូនីទ័រ ដែលបន្ទាប់មកបង្ហាញព័ត៌មាននៅលើអេក្រង់របស់វា។"
                },
            {
                    question: "តើ 1 Byte មានចំនួនប៉ុន្មាន Bits?",
                    image: "null",
                    options: ["4", "8", "16", "32"],
                    answer: 1,
                    additionalInfo: "មួយបៃគឺស្មើនឹង 8 ប៊ីត។ ដូច្នេះ ប្រសិនបើអ្នកបំប្លែង 1 បៃ(byte) ទៅជាប៊ីត(bits) អ្នកនឹងទទួលបាន៖ 1 byte = 8 Bits។"
                  },
              {
                    question: "តើទំហំផ្ទុកខាងក្រោមមួយណាធំជាងគេ?",
                    image: "null",
                    options: ["Terabyte", "Gigabyte", "Megabyte", "Kilobyte"],
                    answer: 0,
                    additionalInfo: "ទំហំផ្ទុកធំបំផុតក្នុងចំណោមជម្រើសដែលបានផ្តល់គឺ តេរ៉ាបៃ (TB)។សមត្ថភាពផ្ទុកដែលបានរាយក្នុងលំដាប់ឡើងគឺ៖1. Kilobyte (KB): 1 គីឡូបៃស្មើនឹង 1,024 បៃ។2. មេកាបៃ (MB): 1 មេកាបៃស្មើនឹង 1,024 គីឡូបៃ ឬប្រហែល 1 លានបៃ។3. Gigabyte (GB): 1 gigabyte ស្មើនឹង 1,024 megabytes ឬប្រហែល 1 billion bytes។4. Terabyte (TB): 1 terabyte ស្មើនឹង 1,024 ជីហ្គាបៃ ឬប្រហែល 1 ពាន់ពាន់លានបៃ។ដូចដែលអ្នកអាចមើលឃើញ សមត្ថភាពផ្ទុកនីមួយៗគឺធំជាងទំហំមុនប្រហែល 1,024 ដង ដែលមានន័យថា terabyte មានទំហំធំជាងមួយជីហ្គាបៃ មេកាបៃ និងគីឡូបៃ។"
                  },
              {
                    question: "តើអក្សរកាត់ CPU តំណាងឱ្យអ្វី?",
                    image: "https://www.groovypost.com/wp-content/uploads/2021/06/tpu-cpu-featured.jpg",
                    options: ["Computer Processing Unit", "Central Processing Unit", "Control Processing Unit", "Core Processing Unit"],
                    answer: 1,
                    additionalInfo: "CPU តំណាងឱ្យ Central Processing Unit។ វាគឺជាសមាសធាតុចម្បងនៃកុំព្យូទ័រ។ ស៊ីភីយូអនុវត្តការណែនាំរបស់កម្មវិធីកុំព្យូទ័រដោយអនុវត្តប្រតិបត្តិការនព្វន្ធមូលដ្ឋាន តក្កវិជ្ជា ការគ្រប់គ្រង និងបញ្ចូល/បញ្ចេញ (I/O) ។ ជារឿយៗវាត្រូវបានគេហៅថា ខួរក្បាល នៃកុំព្យូទ័រ។"
                  },
              {
                    question: "តើមួយណាខាងក្រោមមិនមែនជាឧទាហរណ៍នៃប្រព័ន្ធប្រតិបត្តិការ?",
                    image: "null",
                    options: ["Windows", "Linux", "Android", "Microsoft Office"],
                    answer: 3,
                    additionalInfo: "ជម្រើសដែលមិនមែនជាឧទាហរណ៍នៃប្រព័ន្ធប្រតិបត្តិការគឺ Microsoft Office។ Microsoft Office គឺជាសំណុំនៃកម្មវិធីដែលបង្កើតឡើងដោយ Microsoft ដែលរួមមានកម្មវិធីដូចជា Microsoft Word, Excel, PowerPoint និងផ្សេងៗទៀត។ ខណៈពេលដែល Microsoft Office ត្រូវបានប្រើប្រាស់យ៉ាងទូលំទូលាយសម្រាប់កិច្ចការផ្សេងៗ វាមិនមែនជាប្រព័ន្ធប្រតិបត្តិការខ្លួនឯងនោះទេ។ វាដំណើរការលើប្រព័ន្ធប្រតិបត្តិការផ្សេងៗគ្នាដូចជា Windows, macOS និង Linux ។"
                  },
              {
                    question: "តើអក្សរកាត់ URL តំណាងឱ្យអ្វី?",
                    image: "null",
                    options: ["Universal Resource Locator", "Uniform Resource Locator", "Universal Reference Link", "Uniform Reference Link"],
                    answer: 1,
                    additionalInfo: "URL តំណាងឱ្យ Uniform Resource Locator ។ វាគឺជាប្រព័ន្ធអាសយដ្ឋានស្តង់ដារដែលប្រើដើម្បីកំណត់អត្តសញ្ញាណធនធាននៅលើអ៊ីនធឺណិត។ URL ផ្តល់ទីតាំង ឬអាសយដ្ឋានជាក់លាក់នៃធនធានដូចជាគេហទំព័រ ឯកសារ ឬសេវាកម្ម។សមាសធាតុនៃ URL ជាធម្មតារួមបញ្ចូលពិធីការ(the protocol) (ដូចជា http:// ឬ https://) ឈ្មោះដែន(domain name) ឬអាសយដ្ឋាន IP របស់ម៉ាស៊ីនមេដែលបង្ហោះធនធាន ។ URLs ត្រូវ​បាន​ប្រើ​ដោយ​កម្មវិធី​រុករក​បណ្ដាញ​ដើម្បី​ទាញ​យក និង​បង្ហាញ​ទំព័រ​បណ្ដាញ ហើយ​ត្រូវ​បាន​ប្រើ​យ៉ាង​ទូលំទូលាយ​ក្នុង​កម្មវិធី​អ៊ីនធឺណិត​ផ្សេងៗ។"
                  },
              {
                    question: "ឧបករណ៍ម្យ៉ាងដែលមានតួនាទីផ្គត់ផ្គង់ចរន្តអគ្គិសនីទៅគ្រប់ឧបករណ៍ និង សមាសភាពទាំងអស់របស់Computerគេហៅថា...",
                    image: "null",
                    options: ["Hard Disk", "RAM", "CPU", "Power supply"],
                    answer: 3,
                    additionalInfo: "Power Supply: ជាឧបករណ៍ម្យ៉ាងដែលមានតួនាទី ផ្គត់ផ្គង់ចរន្តអគ្គិសនី ទៅគ្រប់ឧបករណ៍ និងសមាសភាពទាំងអស់របស់Computer។ Power supply type: AT, Baby AT,LPX,ATX,BTX,SFZ,PS3,WTX,FTZ,LFX,CFX,EPS។"
                  },
              {
                    question: "តើអ្វីទៅជាCPU Fan?",
                    image: "https://5.imimg.com/data5/FQ/YJ/MY-8118327/intel-cpu-fan-28-processor-fan-29.jpg",
                    options: ["ជាម៉ាស៊ីនអេឡិចត្រូនិកដែលអាចឱ្យអ្នកប្រើប្រាស់បញ្ចូលព័ត៌មាន រក្សាទុកព័ត៌មាន និងបង្ហាញព័ត៌មានមកខាងក្រៅ", "ជាកង្ហារបស់CPU សម្រាប់ធ្វើឱ្យCPUត្រជាក់នៅពេលវាដំណើរការ។ វាផ្សំឡើងរវាងកង្ហា និងឧបករណ៍ស្រូបកម្ដៅ។", "ជាអង្គចងចាំទិន្នន័យ ដែលប្រើសម្រាប់ទុកទិន្នន័យផ្សេងៗមិនឱ្យបាត់បង់។", "ចម្លើយទាំងអស់ខាងលើ"],
                    answer: 1,
                    additionalInfo: "CPU Fan មាននាទីជួយដកកម្ដៅ និងរក្សា CPU នៅសីតុណ្ហភាពប្រតិបត្តិការប្រកបដោយសុវត្ថិភាព។ល្បឿននៃកង្ហា CPU ជាធម្មតាត្រូវបានគ្រប់គ្រងដោយ motherboard របស់កុំព្យូទ័រ ឬឧបករណ៍បញ្ជាកង្ហារជាក់លាក់ ហើយវាកែតម្រូវដោយផ្អែកលើសីតុណ្ហភាព CPU ។ នៅពេលដែលស៊ីភីយូស្ថិតនៅក្រោមបន្ទុកធ្ងន់ ឬដំណើរការនៅសីតុណ្ហភាពខ្ពស់ ល្បឿនកង្ហារនឹងកើនឡើង ដើម្បីផ្តល់ភាពត្រជាក់កាន់តែច្រើន។ ផ្ទុយទៅវិញ នៅពេលដែលស៊ីភីយូនៅទំនេរ ឬនៅសីតុណ្ហភាពទាប ល្បឿនកង្ហារអាចនឹងកាត់បន្ថយ ដើម្បីកាត់បន្ថយសំឡេងរំខាន។កង្ហារ CPU ដើរតួនាទីយ៉ាងសំខាន់ក្នុងការរក្សាស្ថេរភាព និងភាពជាប់បានយូរនៃស៊ីភីយូ ដោយការពារវាពីការឡើងកម្ដៅខ្លាំង។"
                  },
              {
                    question: "តើពាក្យពេញរបស់POSTគឺជាអ្វី?",
                    image: "null",
                    options: ["Point of Sale Terminal", "Power On Self Test", "Portable Optical Sensor Tester", "Power On System Test"],
                    answer: 1,
                    additionalInfo: "Power On Self Test (ត្រួតពិនិត្យរាល់ Hardware Personal Compter Program Boot ដែលស្ថិតនៅក្នុង ROM ត្រួតពិនិត្យ Drive A: ដើម្បីដឹងថា តើមានFloppy Diskឬអត់? បើមានFloppy Disk នៅក្នុង Drive A:វារកមើលនូវ File System ឈ្មោះ IO.sys និង MS-DOS.sys ដែលជាfileអាចឱ្យកុំព្យូទ័រដំណើរការតទៅមុខទៀត។)"
                  },
              {
                    question: "តើ CPU និង Memory មានទីតាំងស្ថិតនៅលើអ្វី?",
                    image: "null",
                    options: ["Hard Dirve", "Storage device", "Motherboard", "Case"],
                    answer: 2,
                    additionalInfo: "Motherboard គឺជាផ្ទាំងសៀគ្វីធំមួយស្ថិតនៅក្នុង System Unit របស់កុំព្យូទ័រ ដែលមានតួនាទីយ៉ាងសំខាន់ក្នុងដំណើរការរបស់កុំព្យូទ័រ។ Motherboard ប្រៀបបានទៅនឹងដងខ្លួន ព្រោះរាល់Hardwareទាំងអស់របស់កុំព្យូទ័រត្រូវបានភ្ជាប់ជាមួយនឹង MotherboardហើយHardwareទាំងនោះមានដូចជា CPU, Memory,..."
                  },
              {
                    question: "LED,LCD,CRT គឺជាឈ្មោះដែលទាក់ទងទៅនឹងប្រភេទផ្សេងៗគ្នានៃ...",
                    image: "null",
                    options: ["Semiconductor", "Sound System", "Monitor", "មិនមានចម្លើយ"],
                    answer: 2,
                    additionalInfo: "LED,LCD,CRT គឺជាឈ្មោះដែលទាក់ទងទៅនឹងប្រភេទផ្សេងៗគ្នានៃ Monitor"
                  },
              {
                    question: "....គឺជាទម្រង់នៃការចងចាំជាអចិន្រ្តៃយ៍ ដែលផ្ទុកនូវរាល់ការណែនាំដែលកុំព្យូទ័រត្រូវការ និងមិនត្រូវបានលុបនៅពេលដែលថាមពលត្រូវបានបិទ",
                    image: "null",
                    options: ["Hard disk", "ROM", "RAM", "The Network Interface Card (NIC)"],
                    answer: 1,
                    additionalInfo: "ROM គឺជាទម្រង់នៃការចងចាំជាអចិន្រ្តៃយ៍ ដែលផ្ទុករាល់ការណែនាំដែលកុំព្យូទ័រត្រូវការ និងមិនត្រូវបានលុបនៅពេលថាមពលអគ្គិសនីត្រូវបានបិទ។"
                  },
              {
                    question: "តើ USB Flash Drive ស្ថិតក្នុងប្រភេទនៃឧបករណ៍ផ្ទុក(Storage device)មួយណា?",
                    image: "null",
                    options: ["Secondary Storage", "Internal Storage", "Primary Storage", "External Storage"],
                    answer: 0,
                    additionalInfo: "USB flash drive ស្ថិតក្នុងប្រភេទនៃឧបករណ៍ផ្ទុកទិន្នន័យ Secondary Storage (Secondary Storageមានដូចជា SSD,Hard Disk,Floppy Disk,Flash Drive)។"
                  },
              {
                    question: "នៅក្នុងប្រព័ន្ធប្រតិបត្តិការ Windows នៅពេលអ្នកលុបឯកសារ(File) ឬថតឯកសារ(Folder)វាមិនត្រូវបានលុបចោលភ្លាមៗទេ វានឹងផ្ទុកនៅក្នុង........",
                    image: "null",
                    options: ["Desktop", "Drive D:", "My Computer", "Recycle Bin"],
                    answer: 3,
                    additionalInfo: "នៅក្នុងប្រព័ន្ធប្រតិបត្តិការ Windows នៅពេលអ្នកលុបឯកសារ(File) ឬថតឯកសារ(Folder)វាមិនត្រូវបានលុបចោលភ្លាមៗទេ វានឹងផ្ទុកនៅក្នុង Recycle Bin"
                  },
              {
                    question: "........គឺជាឧបករណ៍សម្រាប់បញ្ចូលទិន្នន័យ(Input device)",
                    image: "null",
                    options: ["Speaker", "Monitor", "Keyboard", "Printer"],
                    answer: 2,
                    additionalInfo: "Keyboard គឺជាឧបករណ៍ប្រើសម្រាប់បញ្ចូលទិន្នន័យ(Input device)។"
                  },
              {
                    question: "តើមួយណាជាឧទាហរណ៍នៃលេខប្រព័ន្ធគោលពីរ?",
                    image: "null",
                    options: ["A1SCX1", "0978873", "687392", "1101"],
                    answer: 3,
                    additionalInfo: "Binary គឺជាប្រព័ន្ធលេខគោល២ ដែលបង្កើតដោយលោក Gottfried Leibniz ដែលបង្កើតឡើងដោយមានតែពីរលេខប៉ុណ្ណោះគឺ ០ និង ១។"
                  },
              {
                    question: "តើ Shortcut Keys មួយណាដែលអាចឱ្យយើងរក្សាទុក(Save)នៅក្នុងកម្មវិធីណាមួយរបស់ Windows?",
                    image: "null",
                    options: ["Ctrl + A", "Ctrl + S", "Ctrl + P", "Ctrl + V"],
                    answer: 1,
                    additionalInfo: "Ctrl + S គឺជា Shortcut Keyដែលឱ្យយើងរក្សាទុក (Save)នៅក្នុងកម្មវិធីណាមួយ។"
                  },
              {
                    question: "តើ Shortcut Keys មួយណាដែលអាចឱ្យយើងបិទភ្ជាប់(Past)នៅក្នុងកម្មវិធីណាមួយរបស់ Windows?",
                    image: "null",
                    options: ["Ctrl + A", "Ctrl + P", "Ctrl + C", "Ctrl + V"],
                    answer: 3,
                    additionalInfo: "Ctrl + V គឺជា Shortcut Keyដែលឱ្យយើងបិទភ្ជាប់(Past)នៅក្នុងកម្មវិធីណាមួយ។"
                  },
              {
                    question: "តើ Shortcut Keys មួយណាដែលអាចឱ្យយើងចម្លង(Copy)នៅក្នុងកម្មវិធីណាមួយរបស់ Windows?",
                    image: "null",
                    options: ["Ctrl + C", "Ctrl + A", "Ctrl + V", "Ctrl + Z"],
                    answer: 0,
                    additionalInfo: "Shortcut Key ដើម្បីចម្លង(Copy)នៅក្នុងវីនដូគឺ Ctrl + C។"
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
    selectedQuestions = getRandomQuestions(20);
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
    let currentQuestion = 1; // Initialize the current question number
  
    const progressBar = document.querySelector(".progress-bar");
    progressBar.style.width = "100%";
  
    timer = setInterval(() => {
      timeLeft--;
  
      const progressPercentage = (timeLeft / 60) * 100;
      progressBar.style.width = `${progressPercentage}%`;
  
      // Display the current question number alongside the total number of questions
      timerElement.textContent = `Time Left: ${timeLeft} `;
  
      if (timeLeft <= 4) {
        timeisout.play();
      }
      if (timeLeft === 0) {
        clearInterval(timer);
        incorrectSound.play();
        showCorrectAnswer();
      }
    }, 1000);
  
    // Increment the current question number
    currentQuestion++;
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