import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeputadoService } from './model/deputado.service';
import { Deputado } from './model/deputado';

@Component({
  selector: 'app-busca-deputado',
  templateUrl: './busca-deputados.component.html',
  styleUrls: ['./busca-deputados.component.css']
})
export class BuscaDeputadoComponent {
  form: FormGroup;
  deputados: Deputado[] = [];

  constructor(private fb: FormBuilder, private deputadoService: DeputadoService) {
    this.form = this.fb.group({
      nome: [''],
      partido: ['']
    });
  }

  buscar() {
    const { nome, partido } = this.form.value;

    if (nome.trim()) {
      this.deputadoService.buscarDeputadosPorNome(nome).subscribe((dados: any) => {
        this.deputados = dados.dados.map((deputado: any) => ({
          id: deputado.id,
          nome: deputado.nome,
          partido: deputado.siglaPartido,
          foto: deputado.urlFoto
        }));
      });
    } else if (partido.trim()) {
      this.deputadoService.buscarDeputadosPorPartido(partido).subscribe((dados: any) => {
        this.deputados = dados.dados.map((deputado: any) => ({
          id: deputado.id,
          nome: deputado.nome,
          partido: deputado.siglaPartido,
          foto: deputado.urlFoto
        }));
      });
    } else {
      this.deputados = [];
    }
  }
}


