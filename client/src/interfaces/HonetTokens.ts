interface Honeytoken {
	getTokenID(): string;
	getGroupID(): string;
	getType(): Honeytoken;
	getCreationDate(): Date;
	getExpirationDate(): Date;
	isExpired(): boolean;
	isTriggered(): boolean;
	getNotes(): string[];
}

interface HoneytokenManager {
	createTokens(token_type: Honeytoken, numOfTokens: number): void;
	deleteTokens(groupID: string): void;
}

interface HoneytokenScatter {
	manualPlacement(tokens: Honeytoken[], where: any): void;
	autoPlacement(tokens: Honeytoken[]): void;
}
