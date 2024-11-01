import CuponsUpload from "../../components/cupons/CuponsUpload"



const TypeCupons = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Tipo de cupones</h1>
      <div className="space-y-4">
        <CuponsUpload />
      </div>
    </div>
  )
}

export default TypeCupons