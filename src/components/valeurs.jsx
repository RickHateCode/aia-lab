import { ClipboardDocumentCheckIcon, PaintBrushIcon, FingerPrintIcon, UserGroupIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Satisfaction Client',
    description:
      'satisfaire les exigences de nos clients, en fournissant des designs de haute qualité, dans le respect des délais et des budgets impartis',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: 'Créativité',
    description:
      'proposer des concepts innovants pour chaque projet',
    icon: PaintBrushIcon,
  },
  {
    name: 'Relationnel',
    description:
      "développement des stratégies de communication personnalisées qui favorisent l'engagement, encouragent le dialogue et créent une véritable communauté autour de nous",
    icon: UserGroupIcon,
  },
  {
    name: 'Excellence technique',
    description:
      'produire le plus haut niveau de compétence technique enmatière de conception graphique.',
    icon: ComputerDesktopIcon,
  },
]

export default function Valeurs() {
  return (
    <div className=" py-24 sm:py-32 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-2xl md:text-4xl  font-bold text-white mb-4">Nos Ojectifs</h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16 text-start">
                <dt className="text-base/7 font-bold text-white">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-[#08c1dc]">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-lg text-white max-w-2xl mx-auto lg:mx-0 text-left md:text-left  lg:text-left">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}