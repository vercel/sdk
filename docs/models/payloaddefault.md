# PayloadDefault

Default build machine type for new deployments. This must be used in combination with the buildEntitlements field. It is respected over Vercel's notion of the default build machine, and was originally implemented to allow Teams to "downgrade". - Hobby customers cannot set this, because they only have access to one machine type - Pro customers get Turbo machines by default, so this field is effectively for downgrading - ENT customers cannot set this (yet), because their default is based on their contract. https://linear.app/vercel/project/self-serve-build-machines-for-enterprise-customers-0cbc357e26d2/overview

## Example Usage

```typescript
import { PayloadDefault } from "@vercel/sdk/models/datacacheread.js";

let value: PayloadDefault = "standard";
```

## Values

```typescript
"enhanced" | "turbo" | "standard" | "elastic"
```