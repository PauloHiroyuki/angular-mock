import { Requisicao } from "./requisicao";

export interface Mock {
    id: string;
    endereco: string;
    httpStatus: number;
    contentType: string;
    charset: string;
    headers: string;
    body: string; 
    requisicoes: Requisicao[];
    ativo: boolean;
    gravarRequisicao: boolean;
  }
  