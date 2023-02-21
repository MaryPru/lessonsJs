
const DB_NAME = 'GUESTBOOK';

localStorage.setItem(`${DB_NAME}_records`, JSON.stringify([{
  "name": "UserName",
  "message": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequatur error maiores quisquam vitae. Aliquid blanditiis, dolorum,",
  "date": "16:19 10.02.2023",
  "id": "1241",
  comments:[{
    "nameComment": "UserName",
    "messageComment": "Lorem ipsum dolor sit amet",
    "dateComment": "16:19 10.02.2023",
  }]
},{
  "name": "UserName2",
  "message": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequatur error maiores quisquam vitae. Aliquid blanditiis, dolorum,",
  "date": "16:19 10.02.2023",
  "id": "1242",
  comments:[
    {
      "nameComment": "UserName1111111111111111111111",
      "messageComment": "Lorem ipsum dolor sit amet",
      "dateComment": "16:19 10.02.2023",
    }
  ]
},{
  "name": "UserName3",
  "message": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequatur error maiores quisquam vitae. Aliquid blanditiis, dolorum,",
  "date": "16:19 01.02.2023",
  "id": "1243",
  comments:[
    {
      "nameComment": "UserName1111111111111111111111",
      "messageComment": "Lorem ipsum dolor sit amet",
      "dateComment": "16:19 01.02.2023",
    }
  ]
},{
  "name": "UserName4",
  "message": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequatur error maiores quisquam vitae. Aliquid blanditiis, dolorum,",
  "date": "16:19 12.01.2023",
  "id": "1244",
  comments:[
    {
      "nameComment": "UserName1111111111111111111111",
      "messageComment": "Lorem ipsum dolor sit amet",
      "dateComment": "16:19 12.01.2023",
    }
  ]
}]))


export const db = {
  db: localStorage,
  records: [],
  /**
   * Получение всех записей
   * @returns {[]}
   */
  getAllRecords() {
    const records = this.db.getItem(`${DB_NAME}_records`);
    this.records = JSON.parse(records || '[]');
    return this.records;
  },
  /**
   * Сохранение всех записей
   */
  saveRecords() {
    this.db.setItem(`${DB_NAME}_records`, JSON.stringify(this.records));
  },
  /**
   * Добавление новой записи
   * @param record
   * @returns {[]}
   */
  addRecords(record) {
    this.records = [record, ...this.records];
    this.saveRecords();
    return this.records;
  },
  /**
   * Удаление записи
   * @param deleteId
   * @returns {[]}
   */
  deleteRecord(deleteId) {
    this.records = this.records.filter(({id}) => id !== deleteId);
    this.saveRecords();
    return this.records;
  },
  /**
   * Обновление записи
   * @param record
   * @returns {[]}
   */
  updateRecord(record) {
    this.records = this.records.map(c => c.id === record.id ? record : c);
    this.saveRecords();
    return this.records;
  }
};
