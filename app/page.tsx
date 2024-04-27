import LoginAdmin from "@/components/templates/login_admin"
import RegistrarAdmin from "@/components/templates/registrar_admin"
import AdminHome from "@/components/templates/admin_home"
import RegistrarEstudianteExterno from "@/components/templates/registrar_estudiante_externo"
import RegistrarEstudianteInterno from "@/components/templates/registrar_estudiante_interno"
import Validar from "@/components/organism/validar"
import ValidacionExitosa from "@/components/organism/validacion_exitosa"
import ValidacionRechazada from "@/components/organism/validacion_rechazada"
import ValidarRegistro from "@/components/organism/validar_registro"

export default function Home() {
  return (
    <LoginAdmin/>
  )
}