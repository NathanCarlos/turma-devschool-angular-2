export interface Member {
    id: number;
    nome: string;
    valorMensalidade: number;
    dataUltimoPgto: string | Date;
    dataInclusaoSistema: string | Date;
}