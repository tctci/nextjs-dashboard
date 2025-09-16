// 导入 postgres 库
// import postgres from 'postgres';

// 创建数据库连接，使用环境变量中的 POSTGRES_URL，启用 SSL
// const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

// 异步函数：列出发票数据
// async function listInvoices() {
// 	const data = await sql`
//     SELECT invoices.amount, customers.name
//     FROM invoices
//     JOIN customers ON invoices.customer_id = customers.id
//     WHERE invoices.amount = 666;
//   `;

// 	return data;
// }

export async function GET() {
  return Response.json({
    message:
      '取消注释此文件并删除此行。完成后可以删除此文件。',
  });
  // try {
  // 	return Response.json(await listInvoices());
  // } catch (error) {
  // 	return Response.json({ error }, { status: 500 });
  // }
}
