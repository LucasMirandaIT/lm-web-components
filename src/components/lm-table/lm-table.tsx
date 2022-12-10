import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'lm-table',
  styleUrl: 'lm-table.scss',
  shadow: true,
})
export class Table {
  @Prop() data = [
    { id: 1, nome: 'Lucas', sobrenome: 'Miranda' },
    { id: 2, nome: 'Lucas', sobrenome: 'Miranda' },
    { id: 3, nome: 'Lucas', sobrenome: 'Miranda' },
    { id: 4, nome: 'Lucas', sobrenome: 'Miranda' },
  ];
  @Prop() showEditColumn: boolean = true;
  @Prop() showRemoveColumn: boolean = true;

  @State() filter = { key: '', order: '' };

  handleClickHeader(column: string) {
    if (this.filter.key === column) {
      this.filter.order === 'asc' ? (this.filter.order = 'desc') : (this.filter.order = 'asc');
    } else {
      this.filter = { key: column, order: 'asc' };
    }
    console.log('this.filter ::: ', this.filter)
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            {this.data &&
              Object.keys(this.data[0]).length > 0 &&
              Object.keys(this.data[0]).map(key => (
                <td onClick={() => this.handleClickHeader(key)}>
                  {key} {key === this.filter.key && (this.filter.order === 'asc' ? 'A' : 'D')}
                </td>
              ))}
          </tr>
        </thead>
        <tbody>
          {this.data.map(item => (
            <tr>
              {Object.keys(item).map(key => (
                <td>{item[key]}</td>
              ))}
              {this.showEditColumn && <td>Edit</td>}
              {this.showRemoveColumn && <td>Delete</td>}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
