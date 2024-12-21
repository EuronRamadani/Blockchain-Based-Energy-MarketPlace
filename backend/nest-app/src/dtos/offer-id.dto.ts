import { ApiProperty } from "@nestjs/swagger";

export class OfferIdDto {
  @ApiProperty({ description: 'The id of the offer.' })
  readonly offerId: number;
  @ApiProperty({ description: 'The value of the offer.' })
  readonly value: number;
}
