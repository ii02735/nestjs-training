/**
 * DTO is a pattern to represent object structure
 * or the shape of an object that will carry data
 * when it will be retrieved / sent from controller
 * 
 * TLDR : it replaces the hard-written parameters
 * of the object that has to be created
 * by a concrete object -> that give a better maintenance
 * 
 * Indeed, if the Task structure has to be changed,
 * instead of modify all of controller's functions,
 * it will be enough to modify the dto --> speed up the maintenance
 */
export class CreateTaskDto {
    title: string;
    description: string;
}

//We using a class and no an interface
/**
 * Because interfaces are pure TS and not JS
 * Ergo, when the application will be compilated,
 * interfaces won't be understood when they will
 * be attached to controllers paramaters
 */