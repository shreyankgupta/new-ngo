export class Reqinv
{
    constructor(public pk_req_id:number,
        public fk_email_id:string,public req_type:string,
        public req_desc:string,public req_date:string,
        public address:string,public req_qty:number,public req_qty_unit:string,public req_category:string,
        public pk_stuff_id:number,public stuff_category:string,public soh:number
    ){}
}
