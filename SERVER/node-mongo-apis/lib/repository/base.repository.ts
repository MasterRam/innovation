export interface IRepository<T> {
  findBy(findQuery: any, callback: (success: boolean, response: any) => void);

  Add(
    findQuery: any,
    data: T,
    callback: (success: boolean, response: any) => void
  );
}
