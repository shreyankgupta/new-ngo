export class Payment
{
    constructor(public pk_pay_id:number,public fk_email_id:string,public amount:number,public fk_don_id:number,public card_no:number,public card_name:string,public card_type:string,public fk_don_date:string){}
}
