import {ICookbookQueryService, IRecipeQueryService, IUserQueryService} from "./QueryServiceInterfaces";

export default class QueryService {

    public static users : IUserQueryService;
    public static cookbooks : ICookbookQueryService;
    public static recipes : IRecipeQueryService;
}
