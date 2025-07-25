import { Shield, LucideProps } from "lucide-react"
import { ForwardRefExoticComponent, RefAttributes } from "react"

interface UserConcentProps{
    dataUsageItems : UserConcentItemInterface[]
}

interface UserConcentItemInterface{
    icon : ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
    title : string,
    description : string, 
}

export default function UserConcent({dataUsageItems} : UserConcentProps) {
  

  return (
    <div className="w-full max-w-4xl mx-auto ">
      <div className="bg-secondary-background rounded-2xl p-8 border border-border ">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-accent-background rounded-xl">
            <Shield className="w-6 h-6 text-inverse-text" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary-text">Penggunaan Data Pengguna</h2>
            <p className="text-secondary-text mt-1">
              Transparansi penggunaan data dalam sistem analisis AI kami
            </p>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-primary-background rounded-xl p-6 mb-8  border-border border">
          <p className="text-primary-text leading-relaxed">
            Kami berkomitmen untuk melindungi privasi dan keamanan data Anda. Berikut adalah penjelasan detail tentang
            bagaimana data Anda digunakan, diproses, dan dilindungi dalam sistem analisis AI kami.
          </p>
        </div>

        {/* Data Usage Items */}
        <div className="space-y-4">
          {dataUsageItems.map((item, index) => (
            <div
              key={index}
              className="bg-primary-background rounded-xl p-6 border border-border  hover:border-accent-background transition-colors duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-secondary-background rounded-lg flex-shrink-0">
                  <item.icon className="w-5 h-5 text-accent-background" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-primary-text mb-2">{item.title}</h3>
                  <p className="text-secondary-text leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-8 p-6 bg-gradient-to-r from-accent-background to-orange-background rounded-xl">
          <div className="flex items-start gap-3">
            <Shield className="w-6 h-6 text-inverse-text flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-inverse-text mb-2">Komitmen Keamanan Data</h3>
              <p className="text-inverse-text leading-relaxed">
                Sistem kami mematuhi standar keamanan internasional dan regulasi perlindungan data. Kami tidak akan
                pernah menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga tanpa persetujuan
                eksplisit dari Anda.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-6 text-center">
          <p className="text-muted-text text-sm">
            Untuk pertanyaan lebih lanjut tentang penggunaan data, hubungi tim support kami di{" "}
            <span className="text-accent-background font-medium">daveadhipramana@gmail.com</span>
          </p>
        </div>
      </div>
    </div>
  )
}
