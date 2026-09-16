# GetProjectsByIdOrNameCustomEnvironmentsVerification

A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`.

## Example Usage

```typescript
import { GetProjectsByIdOrNameCustomEnvironmentsVerification } from "@vercel/sdk/models/getprojectsbyidornamecustomenvironmentsop.js";

let value: GetProjectsByIdOrNameCustomEnvironmentsVerification = {
  domain: "selfish-apricot.info",
  reason: "<value>",
  type: "<value>",
  value: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `domain`           | *string*           | :heavy_check_mark: | N/A                |
| `reason`           | *string*           | :heavy_check_mark: | N/A                |
| `type`             | *string*           | :heavy_check_mark: | N/A                |
| `value`            | *string*           | :heavy_check_mark: | N/A                |