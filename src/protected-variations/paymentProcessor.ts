// Protected Variations

export class StripePaymentProvider {
  async charge(amount) {
    console.log(`Charging ${amount} using Stripe`);
    return true;
  }
}

export class PayPalPaymentProvider {
  async charge(amount) {
    console.log(`Charging ${amount} using PayPal`);
    return true;
  }
}

// The processor is protected from provider changes.
// It only depends on the *behavior*, not the concrete implementation.
export class PaymentProcessor {
  provider;

  constructor(provider) {
    this.provider = provider;
  }

  async process(amount) {
    return await this.provider.charge(amount);
  }
}

// Example

async function main() {
  const provider = new StripePaymentProvider();
  const processor = new PaymentProcessor(provider);

  await processor.process(49.99);
}
