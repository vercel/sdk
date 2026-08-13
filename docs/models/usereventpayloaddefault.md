# UserEventPayloadDefault

Default build machine type for new deployments. This must be used in combination with the buildEntitlements field. It is respected over Vercel's notion of the default build machine, and was originally implemented to allow Teams to "downgrade". - Hobby customers cannot set this, because they only have access to one machine type - Pro customers get Turbo machines by default, so this field is effectively for downgrading - ENT customers cannot set this (yet), because their default is based on their contract. https://linear.app/vercel/project/self-serve-build-machines-for-enterprise-customers-0cbc357e26d2/overview

## Example Usage

```typescript
import { UserEventPayloadDefault } from "@vercel/sdk/models/fastorigintransfer.js";

let value: UserEventPayloadDefault = "elastic";
```

## Values

```typescript
"basic" | "elastic" | "enhanced" | "standard" | "turbo"
```